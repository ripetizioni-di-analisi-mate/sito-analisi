---
titolo: First law and thermodynamic processes
sommario: The signs of heat and work, internal energy, ideal gas processes, pressure-volume diagrams, and energy balances for cycles.
---

## The system and the sign convention

:::definizione{#sistema titolo="Closed system and energy transfers"}
The **system** is the portion of matter selected for study. Everything else is the surroundings. A closed system can exchange energy without exchanging matter. The gas in a cylinder sealed by a piston can receive energy from the hot wall and transfer part of it by moving the piston. The moving wall is part of the boundary across which the transfer takes place.

Heat $Q$ is positive when it enters the system. Work $W$ is positive when the system does it on the surroundings. Expansion against a positive external pressure therefore has $W>0$. During compression, the surroundings exert a force in the direction of the piston's displacement and transfer energy to the system, so the work done **by the gas** is negative. This chapter considers closed systems at rest as a whole, with negligible changes in macroscopic kinetic and potential energy.
:::

:::esempio{titolo="Choosing the boundary"}
A heating element warms the gas inside a rigid, insulated container. If the system includes both the gas and the element, energy enters through the wires as electrical work. If the system consists of the gas alone, the hot element lies outside the chosen boundary and can transfer energy to the gas as heat. The energy balance is written after deciding which objects belong to the system.
:::

## The first law

:::teorema{#primo-principio titolo="Conservation of energy"}
Under the stated assumptions, conservation of energy for a closed system gives
$$
\Delta U=Q-W,
$$
where $\Delta U=U_f-U_i$ is the change in internal energy, the microscopic energy of the system. When the gas absorbs $800\,\mathrm{J}$ and does $300\,\mathrm{J}$ of work, $800\,\mathrm{J}$ enters and $300\,\mathrm{J}$ leaves. The internal energy therefore increases by $500\,\mathrm{J}$.

Internal energy is a **state function** because its change depends only on the initial and final states. Calculating heat and work also requires knowing the process that connects them. Two independent measurements can be used to find the third quantity through $Q=\Delta U+W$ or $W=Q-\Delta U$.
:::

:::esempio{titolo="Compression with heat loss"}
A gas releases $200\,\mathrm{J}$ and receives $500\,\mathrm{J}$ of work from the piston. With the chosen convention, $Q=-200\,\mathrm{J}$ and $W=-500\,\mathrm{J}$. Therefore
$$
\Delta U=-200\,\mathrm{J}-(-500\,\mathrm{J})=300\,\mathrm{J}.
$$
The gas loses energy through the wall, while the piston transfers a larger amount to it. The balance is positive and internal energy increases.
:::

:::attenzione
The heat absorbed equals the increase in internal energy only when the total work is zero. In a reversible isothermal expansion of an ideal gas, $\Delta U=0$ and $Q=W>0$. All the energy received as heat is transferred to the surroundings as work.
:::

## Work on a pressure-volume diagram

::::teorema{#lavoro-volume titolo="Expansion and compression work"}
Consider a gas in a cylinder with an ideal piston of negligible mass and friction. The external pressure $p_{\mathrm{est}}$ is constant, and the only work is volume work. The volume work done by the gas is $W=p_{\mathrm{est}}(V_f-V_i)$. If the process is quasistatic, the gas pressure $p$ can be used on the $p$-$V$ diagram. The work is the signed area under the path, positive during expansion and negative during compression.

:::dimostrazione
The piston has area $A$, and its displacement $\Delta x$ is positive outward. The resisting force on the piston has magnitude $p_{\mathrm{est}}A$, and the volume change is $\Delta V=A\Delta x$. The work transferred is therefore $W=p_{\mathrm{est}}A\Delta x=p_{\mathrm{est}}\Delta V$. If the pressure varies quasistatically, the path can be split into increasingly small steps, each of which has approximate work $p\Delta V$. The sum of these products tends to the signed area under the curve as the subdivision becomes finer. For a straight segment, the area is that of a trapezoid and equals
$$
W=\frac{p_i+p_f}{2}(V_f-V_i).
$$
:::
::::

:::esempio{titolo="Work in an isobaric expansion"}
At $150\,\mathrm{kPa}$ the volume increases from $1$ to $3\,\mathrm{L}$. Since $1\,\mathrm{kPa}\cdot\mathrm{L}=10^3\,\mathrm{Pa}\cdot10^{-3}\,\mathrm{m^3}=1\,\mathrm{J}$, the rectangle of height $150\,\mathrm{kPa}$ and width $2\,\mathrm{L}$ directly gives $W=300\,\mathrm{J}$. Traversing the same segment in compression reverses the sign of the work because $\Delta V=-2\,\mathrm{L}$.

::grafico{linee="1,150 3,150" area="150;0;1;3" punti="1,150,pieno,A;3,150,pieno,B" vettori="1.5,150,2.55,150" xmin=0 xmax=4 ymin=0 ymax=210 nomi="V,p (kPa)" titolo="The segment from A to B is traversed toward larger volumes. The shaded area is $300\,\mathrm{J}$. Volume is in liters."}
:::

:::attenzione
During a rapid process, the internal pressure may vary from point to point in the gas. In this case, a curve drawn between the initial and final equilibrium states is insufficient to find the work. In the ideal-piston model, the external pressure during the displacement is needed.
:::

## Internal energy and molar heat capacities

:::definizione{#calori-molari titolo="Molar heat capacities at constant volume and pressure"}
The internal energy of an ideal gas depends only on temperature. If the molar heat capacity at constant volume $C_V$ is approximately constant over the temperature range considered, then $\Delta U=nC_V\Delta T$, where $n$ is the amount in moles and $\Delta T=T_f-T_i$. $C_V$ measures the energy that must be supplied as heat per mole per kelvin while the volume is held constant. A classical monatomic ideal gas has $C_V=\dfrac{3}{2}R$. A diatomic ideal gas with active rotations and negligible vibrations has $C_V\simeq\dfrac{5}{2}R$. These molar heat capacities are measured in $\mathrm{J/(mol\,K)}$.

For one mole of monatomic gas heated by $20\,\mathrm{K}$, with $R=8.314\,\mathrm{J/(mol\,K)}$, the result is $\Delta U=1\cdot\dfrac{3}{2}\cdot8.314\cdot20\,\mathrm{J}\simeq249\,\mathrm{J}$. The heat equals this value when the gas is enclosed in a rigid container and can do only volume work. A cylinder with a piston also allows work to be exchanged.
:::

::::teorema{#relazione-mayer titolo="Mayer's relation"}
For an ideal gas, the molar heat capacity at constant pressure $C_p$ and the one at constant volume satisfy $C_p-C_V=R$. For the same increase in temperature, keeping the pressure constant requires more heat because the gas expands and does work.

:::dimostrazione
In a quasistatic isobaric heating process, the equation of state gives $p\Delta V=nR\Delta T$. Since $nC_p\Delta T$ enters as heat and the gas does $nR\Delta T$ of work, the first law gives
$$
nC_V\Delta T=nC_p\Delta T-nR\Delta T.
$$
Dividing by $n\Delta T$ for a nonzero change gives $C_V=C_p-R$.
:::
::::

## Isochoric and isobaric processes

:::teorema{#isocora-isobara titolo="Two processes with a quantity held constant"}
In an **isochoric process**, the volume is constant. If volume work is the only possible form of work, then $W=0$ and $Q=nC_V\Delta T$. The segment on the diagram is vertical and has zero area. At fixed volume and amount of gas, $p\propto T$, so the pressure change can be used to find the temperature change.

In a quasistatic **isobaric process**, the pressure is constant. For an ideal gas, $W=nR\Delta T$ and $Q=nC_p\Delta T$. In isobaric cooling, $\Delta T<0$, so the gas contracts, does negative work, and releases heat. For one mole of monatomic gas heated from $300$ to $400\,\mathrm{K}$, $\Delta U\simeq1247\,\mathrm{J}$ in both processes. In the isochoric process this is also the heat absorbed. In the isobaric process, the work is about $831\,\mathrm{J}$ and the heat is about $2079\,\mathrm{J}$, calculated before rounding the contributions.
:::

:::esempio{#cammini titolo="Same states, different amounts of work"}
A monatomic ideal gas moves from $A=(2\,\mathrm{L},100\,\mathrm{kPa})$ to $C=(4\,\mathrm{L},200\,\mathrm{kPa})$. Its change in internal energy can be calculated even without knowing $n$ because $nR\Delta T=\Delta(pV)$. Therefore
$$
\Delta U=\frac32\left(p_CV_C-p_AV_A\right)
=\frac32(800-200)\,\mathrm{J}=900\,\mathrm{J}.
$$

::grafico{linee="2,100 2,200 4,200;2,100 4,100 4,200" punti="2,100,pieno,A;2,200,pieno,B;4,200,pieno,C;4,100,pieno,D" vettori="2,123,2,173;2.5,200,3.5,200;2.5,100,3.5,100;4,123,4,173" xmin=0 xmax=5 ymin=0 ymax=250 nomi="V,p (kPa)" titolo="Paths A-B-C and A-D-C have the same endpoints. The upper horizontal segment corresponds to greater work. Volume is in liters."}

The work along the isochoric segment $AB$ is zero. The pressure along the isobaric segment $BC$ is $200\,\mathrm{kPa}$, so $W_{ABC}=200\cdot2\,\mathrm{J}=400\,\mathrm{J}$. Along path $ADC$, expansion occurs at only $100\,\mathrm{kPa}$, so $W_{ADC}=100\cdot2\,\mathrm{J}=200\,\mathrm{J}$. In both cases the gas must gain the same $900\,\mathrm{J}$ of internal energy. Applying $Q=\Delta U+W$ gives $1300\,\mathrm{J}$ along $ABC$ and $1100\,\mathrm{J}$ along $ADC$.
:::

## Isothermal and adiabatic processes

:::teorema{#isoterma titolo="Reversible isothermal process of an ideal gas"}
In an **isothermal process**, the temperature stays constant. For an ideal gas, $\Delta U=0$, so $Q=W$. If the process is reversible, the work is the signed area under the hyperbola $p=\dfrac{nRT}{V}$ and equals
$$
W=nRT\ln\frac{V_f}{V_i}.
$$
The volume ratio is dimensionless, and the logarithm is natural. The expression follows from the area under the curve because the derivative of the logarithm of $V$ is $\dfrac1V$. At $300\,\mathrm{K}$ one mole of gas that doubles its volume does $W\simeq1729\,\mathrm{J}$ and absorbs the same heat. If the isothermal path is traversed in reverse, the volume ratio is inverted, the logarithm changes sign, and the gas releases the same amount of heat.
:::

::::teorema{#adiabatica titolo="Adiabatic process"}
A process is **adiabatic** when $Q=0$. The first law gives $\Delta U=-W$. An ideal gas expanding and doing work therefore loses internal energy and cools. For one mole of monatomic gas that goes from $400$ to $300\,\mathrm{K}$ during an adiabatic expansion, $\Delta U=\dfrac32 R\cdot(-100\,\mathrm{K})\simeq-1247\,\mathrm{J}$, so $W\simeq1247\,\mathrm{J}$.

For a *reversible* adiabatic process of an ideal gas with constant molar heat capacities,
$$
pV^\gamma=\text{constant},
\qquad TV^{\gamma-1}=\text{constant},
\qquad \gamma=\frac{C_p}{C_V}.
$$
The second relationship follows from the first because $p=\dfrac{nRT}{V}$. For a monatomic gas, $\gamma=\dfrac53$. If the volume doubles reversibly, the ratio of final to initial temperature is $2^{-\frac23}\simeq0.63$. For a gas initially at $400\,\mathrm{K}$, the temperature therefore falls to about $252\,\mathrm{K}$. The relationships between pressure, volume, and temperature require reversibility, while the balance $\Delta U=-W$ holds for any adiabatic process under the chapter's assumptions.


:::dimostrazione
During a small reversible step the gas does work $p\,dV$. Since $Q=0$, the decrease in internal energy satisfies $nC_V\,dT=-p\,dV$. Substituting $p=\dfrac{nRT}{V}$ and dividing by $nT$ gives
$$
C_V\frac{dT}{T}=-R\frac{dV}{V}.
$$
When the small steps are summed, the term $\dfrac{dT}{T}$ gives the logarithm of the temperature ratio because the derivative of $\ln T$ is $\dfrac1T$. The same holds for the volumes. Therefore
$$
\ln\frac{T_f}{T_i}=-\frac{R}{C_V}\ln\frac{V_f}{V_i}.
$$
Mayer's relation gives $\dfrac{R}{C_V}=\gamma-1$. Taking the exponential gives $T_fV_f^{\gamma-1}=T_iV_i^{\gamma-1}$. Since $n$ is constant, the ideal gas law also gives $p_fV_f^\gamma=p_iV_i^\gamma$.
:::

::grafico{f="400/x;400/x^(5/3)" punti="1,400,pieno,A;2,200,pieno,B;2,125.992,pieno,C" xmin=0 xmax=3.1 ymin=0 ymax=500 nomi="V,p (kPa)" legenda="\text{isothermal};\text{adiabatic}" titolo="From state A, with $V=1\,\mathrm{L}$ and $p=400\,\mathrm{kPa}$, expansion to $2\,\mathrm{L}$ leads to a lower pressure along the reversible adiabatic path because the gas cools. Volume is in liters."}
::::

## Cycles and path dependence

:::definizione{#ciclo titolo="Energy balance for a cycle"}
A **cycle** brings the system back to its initial state. The internal energy returns to its starting value, so
$$
\Delta U_{\mathrm{ciclo}}=0,\qquad Q_{\mathrm{tot}}=W_{\mathrm{tot}}.
$$
In a clockwise rectangular cycle, the gas expands at pressure $p_h$ and is compressed at pressure $p_l<p_h$. Let $V_h$ and $V_l$ denote the larger and smaller volumes, respectively. The horizontal segments give $p_h(V_h-V_l)$ and $-p_l(V_h-V_l)$. The work along the vertical sides is zero. The total work is therefore the enclosed area, $(p_h-p_l)(V_h-V_l)$. When the cycle is counterclockwise, each segment is traversed in reverse and the total work changes sign.
:::

:::esempio{titolo="Expansion and compression in a clockwise cycle"}
With pressures of $300$ and $100\,\mathrm{kPa}$ and volumes of $1$ and $3\,\mathrm{L}$, the expansion gives $W_{\mathrm{esp}}=600\,\mathrm{J}$ and the compression gives $W_{\mathrm{comp}}=-200\,\mathrm{J}$. The results are $W_{\mathrm{tot}}=400\,\mathrm{J}$ and $Q_{\mathrm{tot}}=400\,\mathrm{J}$. The net heat is the signed sum of all the heat transfers. In calculating heat engine efficiency, this value is distinct from the total heat absorbed during the segments with $Q>0$.

::grafico{linee="1,100 1,300 3,300 3,100 1,100" area="300;100;1;3" vettori="1,145,1,240;1.45,300,2.55,300;3,250,3,155;2.55,100,1.45,100" xmin=0 xmax=4 ymin=0 ymax=370 nomi="V,p (kPa)" titolo="In the clockwise cycle, the area of the rectangle is the net work of $400\,\mathrm{J}$. Volume is in liters."}
:::

## Real processes and checking the energy balance

:::osservazione{#controlli titolo="Free expansion and checking the signs"}
Inside a rigid, insulated container, a gas occupies one chamber, separated from a second, empty chamber. When the partition is removed, the gas expands into the vacuum and the system remains insulated. Because the expansion occurs against zero external pressure, $W=0$, and because the insulation prevents heat exchange, $Q=0$. The first law gives $\Delta U=0$. For an ideal gas it also follows that $\Delta T=0$.

Free expansion is adiabatic and irreversible. Therefore $\Delta U=-W$ applies, while $pV^\gamma=\text{constant}$ describes a different class of processes. If the final volume is twice as large and the temperature is unchanged, the ideal gas law gives $p_f=\dfrac12p_i$. A *reversible* adiabatic expansion between the same volumes would give a lower final pressure because the gas would cool by doing work.
:::

:::esempio{titolo="Free and isothermal expansions between the same two states"}
An ideal gas starts at $V_i=2\,\mathrm{L}$ and $p_i=200\,\mathrm{kPa}$. In an insulated free expansion to a final volume of $4\,\mathrm{L}$, internal energy and temperature stay constant. The gas therefore reaches $p_f=100\,\mathrm{kPa}$ with $Q=W=0$. The same states can also be connected by a reversible isothermal process. Its work is
$$
W=p_iV_i\ln\frac{V_f}{V_i}=400\ln2\,\mathrm{J}\simeq277\,\mathrm{J}.
$$
Along the isothermal path, $277\,\mathrm{J}$ enters as heat and the same amount leaves as work. The change in internal energy is zero for both processes, as follows from the equal temperatures at their endpoints.
:::
