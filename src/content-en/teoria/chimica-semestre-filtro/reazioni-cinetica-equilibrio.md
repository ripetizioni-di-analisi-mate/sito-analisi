---
titolo: "Chemical reactions, kinetics and equilibrium"
sommario: "Conservation, rates and reaction direction: balances, mechanisms, catalysis, activities, equilibria and precipitation, with experiments and biomedical models."
---

## Balancing a transformation and predicting amounts

:::definizione{#bilanciamento titolo="Atoms, charge and energy"}
A **chemical reaction** transforms some substances, the *reactants*, into other substances, the *products*. It is represented by a **chemical equation**: the reactants on the left of the arrow and the products on the right. During a reaction the atoms bond in a different way, and no atom is created or destroyed. This is why each element appears with the same number of atoms on both sides of the equation. **Balancing** an equation means choosing the numbers to write in front of the formulas, called *coefficients*, so that this condition is satisfied.

For example, in the combustion of ethanol $\mathrm{C_2H_5OH}$ with oxygen, carbon dioxide and water form. The 2 carbon atoms of ethanol require 2 molecules of $\mathrm{CO_2}$. The 6 hydrogen atoms require 3 molecules of $\mathrm{H_2O}$. On the right there are then $2\cdot2+3=7$ oxygen atoms; one is already in ethanol, so 6 more are needed, that is, 3 molecules of $\mathrm{O_2}$.
$$
\mathrm{C_2H_5OH}+3\mathrm{O_2}\longrightarrow2\mathrm{CO_2}+3\mathrm{H_2O}.
$$
The coefficients show in what ratio the substances react: one mole of ethanol reacts with three moles of oxygen. The subscripts, that is, the small numbers at the bottom of the formulas, show instead how the substance is made. During balancing only the coefficients are changed, because changing a subscript means writing another substance: $\mathrm{H_2O}$ is water and $\mathrm{H_2O_2}$ is hydrogen peroxide.

In a reaction between ions the electric charge is also conserved, that is, the sum of the charges is the same on both sides. An example is the formation of solid calcium carbonate.
$$
\mathrm{Ca^{2+}}+\mathrm{CO_3^{2-}}\longrightarrow\mathrm{CaCO_3(s)}
$$
On the left the sum of the charges is $+2-2=0$ and on the right the solid is neutral. This is a **net ionic equation**, that is, it contains only the ions that react. The other ions present in the solution, which stay the same before and after the reaction, are called **spectator ions** and are not written.

In a reaction mass is also conserved: the total mass of the products equals that of the reactants. If the reaction produces a gas in an open container, the balance shows a smaller mass only because the gas has escaped. The balanced equation shows the amounts of substance that react. It does not show how much heat is exchanged or how fast the reaction takes place; these two aspects are treated in the following sections.
:::

:::definizione{#stechiometria titolo="Extent, limiting reactant and yield"}
**Stoichiometry** is the calculation of the amounts of reactants and products starting from the balanced equation. Consider the generic reaction $a\mathrm A+b\mathrm B\longrightarrow c\mathrm C$, where $a$, $b$, $c$ are the coefficients. The **extent of reaction** $\xi$ is an amount in moles that shows how far the reaction has progressed: when the extent is $\xi$, $a\xi$ moles of A and $b\xi$ moles of B have been consumed and $c\xi$ moles of C have formed.
$$
\Delta n_A=-a\xi,\qquad\Delta n_B=-b\xi,\qquad\Delta n_C=c\xi.
$$
In these formulas $\Delta n$ is the change in the number of moles of each substance, negative for reactants and positive for products. The reaction stops when one of the reactants runs out. If $n_{A,0}$ and $n_{B,0}$ are the initial moles, reactant A is enough for an extent $\dfrac{n_{A,0}}{a}$ and reactant B for an extent $\dfrac{n_{B,0}}{b}$. The maximum extent is the smaller of the two values.
$$
\xi_{\max}=\min\left\{\dfrac{n_{A,0}}{a},\dfrac{n_{B,0}}{b}\right\}.
$$
The **limiting reactant** is the one that runs out first, that is, the one with the smaller ratio. The other reactant is *in excess* and part of it is left over. The comparison is made on the moles divided by the coefficient, and not on the masses. If the data are masses, the moles are calculated first with $n=\dfrac{m}{M}$, where $M$ is the molar mass.

For example, in the reaction $2\mathrm{H_2}+\mathrm{O_2}\longrightarrow2\mathrm{H_2O}$ there are $3\,\mathrm{mol}$ of hydrogen and $1\,\mathrm{mol}$ of oxygen. The ratios are $\dfrac32=1.5$ for hydrogen and $\dfrac11=1$ for oxygen, so oxygen is the limiting reactant and $\xi_{\max}=1\,\mathrm{mol}$. $2\cdot1=2\,\mathrm{mol}$ of water form, $2\,\mathrm{mol}$ of hydrogen are consumed and $1\,\mathrm{mol}$ is left.

The amount of product calculated in this way is the *theoretical* amount, that is, the maximum possible. In practice less is obtained, because the reaction may not be complete, other reactions may occur and part of the product is lost during recovery. The **percentage yield** is the ratio between the amount obtained and the theoretical amount, multiplied by 100: $\dfrac{n_{\mathrm{isolated}}}{n_{\mathrm{theoretical}}}\cdot100\%$. If $1.6\,\mathrm{mol}$ of water are obtained out of 2 theoretical, the yield is 80%. A yield above 100% shows that the weighed product is not pure, for example because it still contains water.

![Three moles of hydrogen and one of oxygen form at most two moles of water, leaving one mole of hydrogen.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/bilancio-en.svg)
:::

## Measuring rates and reconstructing a rate law

:::definizione{#velocita titolo="Species change and normalised reaction rate"}
**Chemical kinetics** studies the rate of reactions. The **reaction rate** shows how much the concentration of a reactant or a product changes in one second. It is measured in $\mathrm{mol\,L^{-1}\,s^{-1}}$. For the reaction $a\mathrm A+b\mathrm B\longrightarrow c\mathrm C$, in a solution of constant volume, the rate is defined by the formula below.
$$
v=-\dfrac{1}{a}\dfrac{d[A]}{dt}=-\dfrac{1}{b}\dfrac{d[B]}{dt}=\dfrac{1}{c}\dfrac{d[C]}{dt}.
$$
In this formula $[A]$ denotes the concentration of A and $\dfrac{d[A]}{dt}$ its change per unit time. For reactants there is a minus sign, because their concentration decreases and the rate is a positive number. Each change is divided by the coefficient of the substance, so the rate has the same value whichever substance is measured. The *average* rate is calculated over a time interval, by dividing the change in concentration by the length of the interval. The *instantaneous* rate is the rate at a precise moment and corresponds to the slope of the concentration-time curve at that point.

For example, in the reaction $2\mathrm{H_2O_2}\longrightarrow2\mathrm{H_2O}+\mathrm{O_2}$ two molecules of peroxide are consumed for each molecule of oxygen formed. If oxygen forms at a rate of $0.010\,\mathrm{mol\,L^{-1}\,s^{-1}}$, peroxide is consumed at a rate of $0.020\,\mathrm{mol\,L^{-1}\,s^{-1}}$, and the reaction rate is $0.010\,\mathrm{mol\,L^{-1}\,s^{-1}}$ in both cases. These formulas hold at constant volume. If the volume changes, the concentration also varies through dilution alone, and the rate is defined from the extent of reaction as $\dfrac{1}{V}\dfrac{d\xi}{dt}$.
:::

:::definizione{#ordine titolo="Experimental order and elementary steps"}
The rate of a reaction depends on the concentrations of the reactants. The relation that expresses this dependence is called the **rate law** and often has the form $v=k[A]^\alpha[B]^\beta$. The number $k$ is the **rate constant**, which depends on the reaction and on the temperature. The exponents $\alpha$ and $\beta$ are the **reaction orders** with respect to A and to B (partial orders), and their sum is the overall order. The order shows how sensitive the rate is to concentration: with order 1 the rate doubles if the concentration doubles; with order 2 it becomes four times greater; with order 0 it does not change.

The orders are obtained from experiments and not from the coefficients of the equation. The rate is measured while changing the concentration of a single reactant and keeping everything else constant. For example, if doubling $[A]$ makes the rate four times greater, then $2^\alpha=4$ and $\alpha=2$. If a reactant is present in large excess, its concentration stays almost constant during the reaction. In the law $v=k[A][B]$ with B in excess, the product $k[B]$ is practically constant and the reaction behaves as if it were of order 1 with respect to A alone.

The orders are usually 0, 1 or 2. They can also be fractional or negative; a negative order means that the rate decreases when the concentration of that substance increases, as happens with an inhibitor. The units of $k$ depend on the overall order $n$ and are $\mathrm{(mol\,L^{-1})^{1-n}\,s^{-1}}$: for order 1 one gets $\mathrm{s^{-1}}$ and for order 2 one gets $\mathrm{L\,mol^{-1}\,s^{-1}}$.

Many reactions take place in several successive steps, called **elementary steps**. The set of steps is the **mechanism** of the reaction. An elementary step is a single event, for example the collision between two molecules. The **molecularity** of a step is the number of particles taking part in it: 1 for a unimolecular step, 2 for a bimolecular one. Only for an elementary step do the orders coincide with the coefficients: for the step $\mathrm A+\mathrm B\longrightarrow\mathrm P$ the law is $v=k[A][B]$.

An **intermediate** is a substance that forms in one step and is consumed in a later step, so it does not appear in the overall equation. The rate of the overall reaction is determined mainly by the slowest step, called the *rate-determining step*. A fast step that precedes it also has an effect, because it sets how much intermediate is available for the slow step.
:::

:::osservazione{#leggi-integrate titolo="How concentration changes over time"}
The **integrated rate laws** give the concentration of reactant A as a function of time. The table shows the three most common cases: order 0, order 1 and order 2. In each row $[A]_0$ is the initial concentration, $k$ the rate constant and $t$ the time. The **half-life** is the time needed for the concentration to fall to half.

| Disappearance law | Integrated relation | Half-life |
| --- | --- | --- |
| $-\dfrac{d[A]}{dt}=k$ | $[A]=[A]_0-kt$ | $\dfrac{[A]_0}{2k}$ |
| $-\dfrac{d[A]}{dt}=k[A]$ | $\ln\dfrac{[A]}{[A]_0}=-kt$ | $\dfrac{\ln2}{k}$ |
| $-\dfrac{d[A]}{dt}=k[A]^2$ | $\dfrac{1}{[A]}=\dfrac{1}{[A]_0}+kt$ | $\dfrac{1}{k[A]_0}$ |

The three cases differ in the way the concentration decreases.

- **Order 0**. The concentration decreases by the same amount in equal times, so the graph of $[A]$ against time is a straight line. The half-life depends on the initial concentration.
- **Order 1**. The concentration decreases by the same *fraction* in equal times. The half-life is constant: if it is 10 minutes, after 10 minutes half remains, after 20 a quarter, after 30 an eighth. The graph of $\ln[A]$ against time is a straight line. Radioactive decay and the elimination of many drugs follow this law.
- **Order 2**. The graph of $\dfrac{1}{[A]}$ against time is a straight line. The half-life gets longer as the concentration decreases.

To recognise the order of a reaction, the experimental data are plotted in the three graphs and one observes which of the three is a straight line.

In the figure the three curves start from the same initial concentration and have the same initial rate $v_0$. The horizontal axis shows the time divided by $\dfrac{[A]_0}{v_0}$, that is, $\tau=\dfrac{v_0t}{[A]_0}$. In order 0 the rate stays constant until the end; in orders 1 and 2 the rate decreases as the reactant is consumed, and in order 2 it decreases more rapidly.

![Normalised concentration curves: linear decrease for zero order, exponential for first order and hyperbolic for second order, with equal initial slopes.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/cinetiche-en.svg)
:::

## Barriers, temperature and catalysis

:::definizione{#arrhenius titolo="Effective collisions and transition states"}
For two molecules to react they must collide. Only some of the collisions lead to reaction: a collision is *effective* if the molecules have enough energy and are oriented in a suitable way. The factors that change the rate follow from this.

- **Concentration**. With more molecules in the same volume collisions are more frequent.
- **Temperature**. At a higher temperature the molecules are faster and a larger fraction of collisions has enough energy.
- **Contact surface**. If a reactant is solid, only the particles at the surface react. A powder reacts faster than a block of the same mass, because it has a larger surface.

The minimum energy the molecules must have for the collision to be effective is called the **activation energy** $E_a$. The **Arrhenius law** expresses how the rate constant $k$ depends on temperature.
$$
k=Ae^{-\dfrac{E_a}{RT}},\qquad
\ln\dfrac{k_2}{k_1}=-\dfrac{E_a}{R}\left(\dfrac{1}{T_2}-\dfrac{1}{T_1}\right).
$$
In these formulas $T$ is the absolute temperature, $R=8.314\,\mathrm{J\,mol^{-1}\,K^{-1}}$ is the gas constant and $A$ is the pre-exponential factor, related to the frequency of collisions with a suitable orientation. The first formula shows that $k$ increases when the temperature increases and that, at the same temperature, it is smaller if the activation energy is large. The second formula compares the constants $k_1$ and $k_2$ at two temperatures $T_1$ and $T_2$, and is used to obtain $E_a$ from two measurements. Since $R$ is in joules, an activation energy given in kilojoules is converted into joules. In a graph of $\ln k$ against $\dfrac1T$ the points lie on a straight line of slope $-\dfrac{E_a}{R}$. A steeper line corresponds to a larger activation energy, that is, to a reaction more sensitive to temperature.

During an elementary step the energy of the molecules first rises and then falls. The point of maximum energy is called the **transition state** (or activated complex): it is the arrangement of the atoms in which the old bonds are partly broken and the new ones partly formed. It exists only for an instant and cannot be isolated. An intermediate, on the other hand, corresponds to an energy minimum between two steps and exists for a measurable time.

The energy difference between the reactants and the transition state is the **activation barrier**. The energy difference between reactants and products is another quantity, and establishes whether the reaction is favoured. The two quantities are independent, so a strongly favoured reaction can be extremely slow if the barrier is high. An example is the combustion of paper, which at room temperature does not take place until the initial energy is supplied.

**Transition-state theory** expresses the barrier as the free energy of activation $\Delta G^\ddagger$, measured from the reactants to the transition state. The higher the barrier, the smaller the number of molecules that reach the transition state at each instant, and the slower the reaction.
:::

:::definizione{#catalisi titolo="Alternative pathways and enzymes"}
A **catalyst** is a substance that increases the rate of a reaction without being consumed. It takes part in the reaction and is found unchanged at the end, so it does not appear in the overall equation. The catalyst offers the reaction a different mechanism, with a lower activation barrier. It does not change the energy of the reactants and products, so it changes neither the equilibrium constant $K$ nor the amount of product obtained at equilibrium: equilibrium is simply reached in less time. The catalyst speeds up the forward and the reverse reaction to the same extent.

**Enzymes** are the catalysts of cells. Almost all are proteins; some are molecules of RNA (ribonucleic acid). The substance on which the enzyme acts is called the *substrate* and binds to a region of the enzyme called the *active site*. Each enzyme recognises only one or a few substrates. The enzyme lowers the barrier because it binds the transition state more strongly.

The rate of an enzymatic reaction depends on the substrate concentration in two ways. With little substrate the rate grows in proportion to its concentration (order 1). With a lot of substrate all the active sites are occupied, the enzyme is *saturated* and the rate no longer increases (order 0); more enzyme is needed to increase it. Temperature also has two effects: moderate heating speeds up the reaction, whereas too high a temperature alters the structure of the enzyme (denaturation) and the rate drops sharply.

A catalyst does not make an unfavoured reaction possible. In cells unfavoured reactions take place because they are coupled to another strongly favoured reaction, for example the hydrolysis of ATP (adenosine triphosphate, the molecule that supplies energy to cellular reactions). Coupling changes the overall reaction, because it adds reactants and products, and therefore changes the energy balance. Catalysis changes only the rate.

![Two free-energy profiles have identical starting and final levels but different barriers; the catalysed pathway preserves the reactant–product energy difference.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/barriere-en.svg)
:::

## Recognising equilibrium and writing its constant

:::definizione{#equilibrio titolo="Dynamic equilibrium and steady state"}
Many reactions are **reversible**: while the reactants turn into products, the products turn back into reactants. In a closed container the forward reaction slows down as the reactants are consumed and the reverse reaction speeds up as the products accumulate. When the two rates become equal, the concentrations no longer change and **chemical equilibrium** has been reached.

The equilibrium is *dynamic*, that is, the two reactions keep taking place and balance each other exactly. At equilibrium the concentrations stay constant over time; in general reactants and products have different concentrations from each other. The continuous exchange is revealed by adding a reactant labelled with an isotope: after a certain time the isotope is also found in the products.

A reaction is considered *irreversible* when the reverse reaction is negligible, as in a combustion. It is written with a single arrow; a reversible reaction is written with the double arrow $\rightleftharpoons$.

A **steady state** is a different situation from equilibrium. Here too the concentrations stay constant, but the system is open: a substance enters or is produced at the same rate at which it leaves or is consumed. A cell keeps the concentration of a metabolite constant by continuously producing and consuming it, with a net flow of matter and energy. At equilibrium, on the other hand, there is no net flow. To distinguish the two cases one therefore observes whether the system exchanges matter with the outside.

![Comparison of a reversible reaction with equal opposing rates and an open system maintained constant by input and consumption.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/stazionario-en.svg)
:::

:::definizione{#costante-equilibrio titolo="Activities and standard states"}
At equilibrium the concentrations of reactants and products are linked by a number, the **equilibrium constant** $K$. For the reaction $a\mathrm A+b\mathrm B\rightleftharpoons c\mathrm C+d\mathrm D$ the constant is
$$
K=\dfrac{a_C^c a_D^d}{a_A^a a_B^b}.
$$
This relation is called the **law of mass action**. The products are in the numerator, the reactants in the denominator, and each term has its own coefficient as exponent. The symbols $a_C$, $a_D$, $a_A$, $a_B$ denote the *activities*, which in dilute solutions coincide with the numerical values of the concentrations in $\mathrm{mol\,L^{-1}}$. The value of $K$ depends only on the reaction and on the temperature. If $K$ is much greater than 1, products prevail at equilibrium; if it is much smaller than 1, reactants prevail. For example, for $\mathrm A\rightleftharpoons\mathrm B$ with $K=4$, at equilibrium the concentration of B is four times that of A.

In the equilibrium constant the exponents are always the coefficients of the equation. In the rate law, on the other hand, the orders are obtained from experiments.

The activity of each substance is a number without units, so $K$ is also without units. It is calculated differently according to the state of the substance.

- For a solute, $a_i=\gamma_i\dfrac{[i]}{c^\circ}$, with $c^\circ=1\,\mathrm{mol\,L^{-1}}$. The activity coefficient $\gamma_i$ is about 1 in dilute solutions.
- For a gas, $a_i=\dfrac{p_i}{p^\circ}$, where $p_i$ is the partial pressure and $p^\circ=1\,\mathrm{bar}$.
- For a pure solid or a pure liquid, $a_i=1$.

As a consequence pure solids and pure liquids, including water when it is the solvent, do not appear in the expression of $K$. For example, for $\mathrm{CaCO_3(s)}\rightleftharpoons\mathrm{CaO(s)}+\mathrm{CO_2(g)}$ the constant contains only the pressure of $\mathrm{CO_2}$. Adding more solid does not shift the equilibrium; it only increases the surface and therefore the rate at which equilibrium is reached. This holds as long as the solid is present: if it dissolves or is consumed completely, the equilibrium with the solid no longer exists.

The symbols $K_c$ and $K_p$ are often encountered. $K_c$ is the constant written with concentrations in $\mathrm{mol\,L^{-1}}$ and $K_p$ is the one written with partial pressures. The calculations in this chapter use the numerical values of the concentrations in $\mathrm{mol\,L^{-1}}$, which is equivalent to dividing them by $c^\circ$.
:::

## Determining direction using Q and free energy

:::definizione{#quoziente-gibbs titolo="Current composition and equilibrium composition"}
The **reaction quotient** $Q$ has the same expression as $K$, but is calculated with the concentrations present at any moment, even far from equilibrium. Comparing $Q$ and $K$ shows in which direction the reaction proceeds.

- If $Q<K$ there are few products compared with equilibrium, so the reaction proceeds towards the products.
- If $Q>K$ there are too many products, so the reaction proceeds towards the reactants.
- If $Q=K$ the system is at equilibrium.

The same criterion is expressed with the reaction free energy $\Delta_rG$, which at constant temperature and pressure is linked to $Q$ by the relations below.
$$
\Delta_rG=\Delta_rG^\circ+RT\ln Q,
$$
$$
\Delta_rG^\circ=-RT\ln K,\qquad
\Delta_rG=RT\ln\dfrac{Q}{K}.
$$
In these formulas $\Delta_rG^\circ$ is the standard reaction free energy, that is, the value of $\Delta_rG$ when all activities equal 1, $R$ is the gas constant and $T$ the absolute temperature. The last formula shows that with $Q<K$ the logarithm is negative, so $\Delta_rG<0$ and the reaction proceeds towards the products. With $Q>K$ one has $\Delta_rG>0$ and the reaction proceeds towards the reactants. With $Q=K$ one has $\Delta_rG=0$. The relation $\Delta_rG^\circ=-RT\ln K$ links the equilibrium constant to the standard free energy: a negative $\Delta_rG^\circ$ corresponds to $K>1$.

For example, for $\mathrm A\rightleftharpoons\mathrm B$ with $K=4$, a mixture with $[A]=0.80\,\mathrm{mol\,L^{-1}}$ and $[B]=0.20\,\mathrm{mol\,L^{-1}}$ has $Q=\dfrac{0.20}{0.80}=0.25$. Since $Q<K$, part of A turns into B until the ratio becomes 4. If instead the initial mixture has $Q=20$, part of B turns into A, even though $K>1$. The value of $K$ gives the final composition; the direction in which the reaction proceeds depends on the starting composition.

To calculate the equilibrium concentrations, the concentration that reacts is called $x$. For $\mathrm A\rightleftharpoons\mathrm B$ at constant volume one has $[A]=[A]_0-x$ and $[B]=[B]_0+x$. These expressions are substituted into $K$ and the equation is solved for $x$. In the previous example $\dfrac{0.20+x}{0.80-x}=4$, which gives $x=0.60$. At equilibrium $[A]=0.20\,\mathrm{mol\,L^{-1}}$ and $[B]=0.80\,\mathrm{mol\,L^{-1}}$. If the coefficients differ from 1, each change is multiplied by its own coefficient. Among the solutions of the equation, the one that gives positive concentrations is chosen. The constant $K$ gives no information about the time needed to reach equilibrium.

![Sign of delta G divided by RT against the logarithm of Q over K: negative towards products, zero at equilibrium and positive towards reactants.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/quoziente-en.svg)
:::

## Changing concentration, pressure and temperature

:::osservazione{#le-chatelier titolo="Equilibrium shifts with explicit constraints"}
**Le Chatelier's principle** states that, if a condition of a system at equilibrium is changed, the system reacts in the direction that reduces the effect of the change, until a new equilibrium is reached. The conditions that can be changed are concentration, pressure and temperature.

**Concentration**. If a reactant is added, the reaction proceeds towards the products and consumes part of it. If a product is added, it proceeds towards the reactants. The same result is obtained with the reaction quotient: on adding a reactant $Q$ becomes smaller than $K$, and the reaction proceeds towards the products until $Q$ equals $K$ again. The value of $K$ does not change, because the temperature is the same.

**Pressure**. It matters only if there are gases in the reaction. If the system is compressed, that is, the volume is reduced, the reaction proceeds towards the side with fewer moles of gas. For example, in $\mathrm{N_2O_4}\rightleftharpoons2\mathrm{NO_2}$ there is 1 mole of gas on the left and there are 2 on the right, so compression favours $\mathrm{N_2O_4}$. If the moles of gas are equal on the two sides, pressure has no effect. In quantitative terms, if all the partial pressures are multiplied by a number $\lambda$, the quotient $Q$ is multiplied by $\lambda^{\Delta\nu}$, where $\Delta\nu$ is the difference between the moles of gas of the products and those of the reactants.

**Inert gas**. Adding a gas that does not react has different effects depending on the conditions. At constant volume the partial pressures of the reacting gases stay the same, because $p_i=\dfrac{n_iRT}{V}$ does not depend on the other gases; the total pressure increases and the equilibrium does not shift. At constant total pressure the container expands, the partial pressures decrease and the equilibrium shifts towards the side with more moles of gas, as in an expansion.

**Temperature**. It is the only change that alters the value of $K$. If $\Delta_rH^\circ$ is the standard reaction enthalpy, the constants $K_1$ and $K_2$ at two temperatures $T_1$ and $T_2$ are linked by the relation below (van't Hoff equation).
$$
\ln\dfrac{K_2}{K_1}=-\dfrac{\Delta_rH^\circ}{R}\left(\dfrac{1}{T_2}-\dfrac{1}{T_1}\right).
$$
If the reaction is endothermic ($\Delta_rH^\circ>0$), an increase in temperature increases $K$ and favours the products. If it is exothermic ($\Delta_rH^\circ<0$), an increase in temperature decreases $K$ and favours the reactants. In an exothermic reaction heating therefore has two opposite effects: the reaction is faster, by the Arrhenius law, and less product is obtained at equilibrium. The Arrhenius law concerns the rate; the van't Hoff equation concerns the composition at equilibrium.

![For N2O4 in equilibrium with two NO2, compression increases Q, inert gas at constant volume leaves Q unchanged and inert gas at constant pressure lowers Q.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/gas-inerte-en.svg)
:::

## Connecting several reactions

:::osservazione{#equilibri-multipli titolo="Constants and simultaneous balances"}
A reaction is often obtained by combining other reactions whose equilibrium constant is known. The constant of the new reaction is calculated with three rules.

| Operation on the equation | New constant |
| --- | --- |
| Reversal | $\dfrac{1}{K}$ |
| Coefficients multiplied by $n$ | $K^n$ |
| Addition of two equations | $K_1K_2$ |

For example, if $\mathrm A\rightleftharpoons\mathrm B$ has $K_1=3$ and $\mathrm B\rightleftharpoons\mathrm C$ has $K_2=5$, adding the two equations gives $\mathrm A\rightleftharpoons\mathrm C$, with $K=3\cdot5=15$. The reverse reaction $\mathrm C\rightleftharpoons\mathrm A$ has $K=\dfrac{1}{15}$. The rules follow from the fact that standard free energies add up and that $\Delta_rG^\circ=-RT\ln K$: a sum of logarithms corresponds to a product. A catalyst of one of the two reactions makes equilibrium be reached faster and does not change these constants.

The rules hold if all the constants refer to the same temperature. When several equilibria take place together in a solution, all the constants must be satisfied at the same time. It must also be taken into account that a substance can be present in several forms. Calcium in a solution, for example, is partly the free ion $\mathrm{Ca^{2+}}$ and partly bound to other molecules. The equilibrium constant contains the concentration of the free form, which is smaller than the total concentration.

![The constants for A to B and B to C multiply to give the constant for A to C; the reverse reaction has the reciprocal constant.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/costanti-en.svg)
:::

## Dissolution, precipitation and biological systems

:::definizione{#prodotto-solubilita titolo="Solubility, saturation and nucleation"}
A *sparingly soluble* salt dissolves in water only in a small amount. When the solution is saturated, the remaining solid is in equilibrium with its ions in solution. The constant of this equilibrium is called the **solubility product** $K_{\mathrm{ps}}$. For a salt MX made of one cation and one anion it is written
$$
\mathrm{MX(s)}\rightleftharpoons\mathrm{M^+(aq)}+\mathrm{X^-(aq)},\qquad
K_{\mathrm{ps}}=a_{M^+}a_{X^-}.
$$
The solid does not appear in the constant, because its activity is 1. The smaller $K_{\mathrm{ps}}$, the less soluble the salt. The **molar solubility** $s$ is the number of moles of salt that dissolve in one litre. The link between $s$ and $K_{\mathrm{ps}}$ depends on the formula of the salt.

- For a salt MX, each mole dissolved gives one mole of $\mathrm{M^+}$ and one of $\mathrm{X^-}$. So $[M^+]=[X^-]=s$ and $K_{\mathrm{ps}}=s^2$. For example, for AgCl $K_{\mathrm{ps}}\simeq1.8\cdot10^{-10}$, which gives $s=\sqrt{1.8\cdot10^{-10}}\simeq1.3\cdot10^{-5}\,\mathrm{mol\,L^{-1}}$.
- For a salt $\mathrm{MX_2}$ one gets one mole of $\mathrm{M^{2+}}$ and two of $\mathrm{X^-}$. So $[M^{2+}]=s$, $[X^-]=2s$ and $K_{\mathrm{ps}}=s\cdot(2s)^2=4s^3$.

For this reason the $K_{\mathrm{ps}}$ values of two salts are compared directly only if the salts have the same type of formula.

To find out whether a precipitate forms in a solution, the **ion product** $Q_{\mathrm{ps}}$ is calculated; it has the same expression as $K_{\mathrm{ps}}$ and uses the concentrations present at that moment.

- If $Q_{\mathrm{ps}}<K_{\mathrm{ps}}$ the solution is not saturated, and more solid can dissolve.
- If $Q_{\mathrm{ps}}=K_{\mathrm{ps}}$ the solution is saturated.
- If $Q_{\mathrm{ps}}>K_{\mathrm{ps}}$ the solution is *supersaturated* and the salt precipitates until $Q_{\mathrm{ps}}$ equals $K_{\mathrm{ps}}$ again.

A supersaturated solution can stay clear for some time, because the formation of the first crystals (*nucleation*) is slow. Adding a small crystal of the salt makes precipitation start at once.

When two solutions are mixed, each dilutes the other. The concentrations to put into $Q_{\mathrm{ps}}$ are those after mixing, calculated on the total volume. For example, when equal volumes of two solutions are mixed, each concentration is halved.

![Three comparisons between ion product and solubility product: possible dissolution, saturation and favoured precipitation with a possible nucleation delay.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/solubilita-en.svg)
:::

:::osservazione{#ione-comune titolo="Free species, common ions and biomedical relevance"}
The solubility of a salt decreases if the solution already contains one of its ions. This is the **common-ion effect**, and it is a consequence of Le Chatelier's principle: the ion already present shifts the equilibrium towards the solid. If the solution already contains the ion $\mathrm{X^-}$ at concentration $c_0$ and the salt MX dissolves with solubility $s$, then $[M^+]=s$ and $[X^-]=c_0+s$.
$$
K_{\mathrm{ps}}\simeq s(c_0+s),\qquad
s\simeq\dfrac{K_{\mathrm{ps}}}{c_0}\quad\text{if }s\ll c_0.
$$
The second formula holds when $s$ is much smaller than $c_0$, as is usually the case. For example, the solubility of AgCl in a solution that already contains $0.10\,\mathrm{mol\,L^{-1}}$ of chloride ions is $s\simeq\dfrac{1.8\cdot10^{-10}}{0.10}=1.8\cdot10^{-9}\,\mathrm{mol\,L^{-1}}$, about seven thousand times smaller than in pure water. The value of $K_{\mathrm{ps}}$ is the same in the two cases, because it depends only on the temperature; the solubility changes.

The reverse reasoning explains how a sparingly soluble salt can be dissolved: it is enough to remove one of its ions from the solution. Calcium oxalate, the most common component of kidney stones, is in equilibrium with free calcium and oxalate ions. If calcium is bound by another molecule, for example citrate, or if oxalate gains an $\mathrm{H^+}$ in an acidic environment, the concentration of the free ion decreases and part of the solid dissolves. The ion product contains the free ions, so a measurement of total calcium is not enough to calculate it.

Uric acid offers a second example. In solution it exists in two forms: neutral uric acid and its anion, urate. The two forms give two different solids, each with its own solubility: solid uric acid and sodium urate. If the pH decreases, that is, if the solution becomes more acidic, a larger part of the urate gains an $\mathrm{H^+}$ and becomes uric acid, which is less soluble; this is why acidic urine favours uric acid stones. Sodium urate precipitates instead where the concentration of urate and sodium is high, as happens in the joints in gout. Stone formation also depends on the volume of urine, on the pH and on the rate at which the crystals grow; the solubility product only shows whether precipitation is favoured.
:::
