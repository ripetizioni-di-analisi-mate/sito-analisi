---
titolo: Temperature, heat and thermodynamics
sommario: States and ideal gases, calorimetry, heat transfer, work, reversible and irreversible processes, Carnot engines and entropy.
---

## Systems, equilibrium and temperature

:::definizione{#stato-termico titolo="System and state variables"}
A gas in a cylinder and water in a calorimeter first require a boundary to be specified. The **system** is the matter or region chosen for the balance; the **surroundings** are everything outside it. An open system can exchange matter and energy; a closed system exchanges energy while retaining its matter; an isolated system exchanges neither. An adiabatic wall prevents heat transfer, but an adiabatic piston can still transmit work.

An equilibrium state is described by macroscopic quantities such as pressure $p$, volume $V$, temperature $T$ and amount of substance $n$. Thermal equilibrium requires the absence of temperature differences capable of producing a net heat flow. Mechanical equilibrium requires balanced forces at the boundary. During rapid expansion, a gas may have different local pressures: assigning it a single intermediate pressure requires an additional approximation.

A **state function**, such as internal energy $U$ or entropy $S$, has a change determined by the initial and final states. Heat and work describe energy transferred during a process and depend on the path. Pressure and temperature are intensive; volume, amount of substance, internal energy and entropy are extensive for additive macroscopic systems.
:::

:::osservazione{titolo="Temperature scales and thermometers"}
If two bodies are separately in thermal equilibrium with a third, they are in thermal equilibrium with each other. This is the zeroth law, which permits comparison using a thermometer. Conversion between Celsius and kelvin is
$$
T\,(\mathrm K)=t\,({}^\circ\mathrm C)+273.15.
$$
A rise of $15\,{}^\circ\mathrm C$ equals $15\,\mathrm K$, whereas a temperature of $15\,{}^\circ\mathrm C$ equals $288.15\,\mathrm K$. The difference between two readings is preserved because the additive constant cancels. Temperature ratios, logarithms and gas laws instead require absolute temperatures. An immersed thermometer slightly changes the energy balance: its disturbance is small when its heat capacity is small compared with the sample's.
:::

## Ideal gases and heat capacities

:::teorema{#gas-ideale titolo="Ideal-gas equation of state"}
An **ideal gas** describes particles with negligible individual volume and negligible interactions except during collisions. It is useful for sufficiently dilute gases far from condensation. For $n$ moles at equilibrium,
$$
pV=nRT,\qquad R\simeq8.314\,\mathrm{J\,mol^{-1}K^{-1}}.
$$
With this value of $R$, $p$ is absolute pressure in pascals and $V$ is volume in cubic metres. The conversion is $1\,\mathrm L=10^{-3}\,\mathrm{m^3}$, and $pV$ has the dimensions of energy. A gauge reading requires $p=p_{\mathrm{gauge}}+p_{\mathrm{atm}}$ before applying the law.

For a fixed amount, $\dfrac{p_1V_1}{T_1}=\dfrac{p_2V_2}{T_2}$. At constant temperature, pressure is inversely proportional to volume; at constant volume, $p$ is proportional to $T$; at constant pressure, $V$ is proportional to $T$. An open valve can change $n$: a rigid vessel alone therefore does not ensure constant $\dfrac{p}{T}$. The equation of state links states and does not determine the heat or work exchanged along a path.
:::

:::definizione{titolo="Internal energy and degrees of freedom"}
Internal energy includes microscopic energies, distinguished from the centre-of-mass kinetic energy and macroscopic potential energy. For an ideal gas of fixed amount and composition, it depends only on temperature. With $C_V$ denoting the *molar* heat capacity at constant volume,
$$
\Delta U=nC_V(T_f-T_i)
$$
when $C_V$ is constant across the interval. For a classical monatomic gas, three translational components give $C_V=\dfrac32R$. For a diatomic gas with active rotations and negligible vibrations, $C_V\simeq\dfrac52R$. These conditions limit the use of the values: at temperatures activating additional modes, the constant-capacity model can become less accurate.

At constant pressure, some heat produces expansion. Molar heat capacity $C_p$ therefore exceeds $C_V$; for an ideal gas, $C_p-C_V=R$. In the monatomic case, $C_p=\dfrac52R$ and $\gamma=\dfrac{C_p}{C_V}=\dfrac53$. For the stated diatomic model, $C_p=\dfrac72R$ and $\gamma=\dfrac75$. The ratio $\gamma$ will determine the slope of reversible adiabats.
:::

## Heat and calorimetric balances

:::definizione{#calorimetria titolo="Heat capacity and specific heat capacity"}
**Heat** $Q$ is energy transferred because of a temperature difference. It is positive when entering the chosen system. A body can receive the same energy as work, for example through a stirrer: the transfer mechanism must be identified from the process.

For a change without phase transitions, with constant specific heat capacity $c$ and under the conditions to which that value applies,
$$
Q=mc\Delta T=C\Delta T.
$$
Mass is $m$, the body's heat capacity is $C=mc$ in $\mathrm{J\,K^{-1}}$, and $c$ is measured in $\mathrm{J\,kg^{-1}K^{-1}}$. For solids and liquids, differences between common mechanical constraints are often neglected in exercises; for gases, distinguishing $C_p$ from $C_V$ is necessary. If specific heat capacity changes appreciably, the product is replaced by $Q=m\int c(T)\,dT$ along the specified process.

In an overall adiabatic calorimeter with negligible external work, an energy balance is imposed between the bodies. With constant specific heat capacities and no reactions or transitions, $\sum_i C_i(T_f-T_i)=0$. The vessel and thermometer must be included when their heat capacities are given. Each contribution already has the correct sign: the hot body has $T_f-T_i<0$.
:::

:::esempio{titolo="Final temperature is a weighted mean"}
Mix $0.20\,\mathrm{kg}$ of water at $60\,{}^\circ\mathrm C$ with $0.30\,\mathrm{kg}$ at $20\,{}^\circ\mathrm C$, using the same constant $c$, a negligible vessel and no heat loss. The balance gives
$$
0.20c(t_f-60)+0.30c(t_f-20)=0,
$$
$$
t_f=\dfrac{0.20\cdot60+0.30\cdot20}{0.50}=36\,{}^\circ\mathrm C.
$$
The result is closer to the larger mass's initial temperature. For different substances, temperatures are weighted by $mc$, since equal masses can store different energies for the same temperature rise. The simple arithmetic mean applies only when the bodies have equal total heat capacities.
:::

## Phase changes and evaporation

:::definizione{#calore-latente titolo="Energy during phase coexistence"}
During an equilibrium transition of a pure substance at fixed pressure, absorbed energy can change the amounts of the phases while maintaining the coexistence temperature. With $\ell$ denoting positive specific latent heat,
$$
Q=m\ell
$$
for melting or vaporising mass $m$; for the reverse transition, the system's heat is negative. The value of $\ell$ depends on the substance and conditions, so the specified value must be used.

Turning cold ice into warm water involves heating the ice, melting it and heating the water. Temperature plotted against heat has two sloping sections and one horizontal section. The sloping sections have gradient $\dfrac{1}{mc}$, while the plateau's horizontal extent measures $m\ell_f$.

![Heating curve for 0.200 kg of ice from minus 30 degrees to water at 40 degrees, with a melting plateau](/figure/fisica-semestre-filtro/termodinamica/riscaldamento-en.svg)

When mixing water and ice, first compare the energy the water can release by cooling to the melting temperature with the energy needed to melt all the ice. If insufficient energy is available, both phases remain at the melting temperature. A formula assuming an entirely liquid final sample would then produce a temperature inconsistent with its assumption.
:::

:::osservazione{titolo="Evaporation and the body's energy balance"}
Evaporation occurs at the surface even below boiling temperature; boiling involves bubbles forming within the liquid when vapour pressure reaches external pressure. Evaporative cooling depends on mass actually evaporated. In a model where all energy comes from the body, evaporating $10\,\mathrm g$ with $\ell_v=2.4\,\mathrm{kJ\,g^{-1}}$ removes $24\,\mathrm{kJ}$. Dripping water does not provide that latent contribution. Humidity, air movement and temperature affect the actual process; the calculation isolates only the stated energy balance.
:::

## Heat transfer

:::definizione{#trasmissione-calore titolo="Conduction, convection and radiation"}
In **conduction**, energy is transferred through microscopic interactions within matter, without bulk transport of the material. For a homogeneous plane slab in a steady state, with faces at $T_h>T_c$, insulated sides and constant thermal conductivity $\kappa$, power directed from the hot to the cold face is
$$
P=\kappa A\dfrac{T_h-T_c}{L}.
$$
Here $A$ is the area crossed and $L$ the thickness. Power is energy per unit time; during an interval with constant $P$, $Q=P\Delta t$. **Thermal resistance** $R_{\mathrm{th}}=\dfrac{L}{\kappa A}$ is measured in $\mathrm{K\,W^{-1}}$ and gives $P=\dfrac{T_h-T_c}{R_{\mathrm{th}}}$.

In series layers with ideal contact and no energy accumulation at the interface, the same power passes through each layer. Resistances add, and the layer with greater resistance has the larger temperature drop. Within each homogeneous material, temperature varies linearly with position; its gradient changes when $\kappa$ changes.

![Steady temperature profile through two layers in series, with a larger drop across the more resistant layer](/figure/fisica-semestre-filtro/termodinamica/conduzione-en.svg)

In **convection**, moving fluid carries energy. Motion can arise from buoyancy due to density differences or be imposed by a pump or fan. In the empirical model $P=hA(T_s-T_f)$, coefficient $h$ depends on flow and geometry: it is distinct from the material's thermal conductivity. Cooling a surface exposed to air can combine convection and evaporation.
:::

:::teorema{titolo="Net radiative exchange"}
**Radiation** transfers energy through electromagnetic waves and can occur in a vacuum. A grey surface of area $A$, emissivity $\varepsilon$ and uniform temperature $T$, surrounded by large isothermal surroundings at $T_a$ with unit view factor, has net outward power
$$
P_{\mathrm{net}}=\varepsilon\sigma A(T^4-T_a^4),
$$
where $\sigma\simeq5.67\cdot10^{-8}\,\mathrm{W\,m^{-2}K^{-4}}$ and temperatures are in kelvin. The grey model assumes the same emissivity describes absorption. The body still emits when $T=T_a$, but absorption balances emission and net exchange is zero. If $T<T_a$, the negative sign indicates net incoming energy.

![Net radiative power of a one-square-metre surface with emissivity 0.90 in surroundings at 293.15 kelvin](/figure/fisica-semestre-filtro/termodinamica/irraggiamento-en.svg)

Doubling absolute temperature multiplies *emitted* power by sixteen at unchanged emissivity. Net power also requires the surroundings term. In a body heat balance, radiation, convection, conduction and evaporation must be distinguished to avoid counting the same energy twice.
:::

## Work, paths and the first law

:::teorema{#primo-principio titolo="Sign convention and energy balance"}
Take $Q>0$ for absorbed heat and $W>0$ for work **done by the system** on its surroundings. For a closed system, neglecting macroscopic kinetic and potential energy changes,
$$
\Delta U=Q-W.
$$
A system absorbing $500\,\mathrm J$ and doing $200\,\mathrm J$ of work increases $U$ by $300\,\mathrm J$. During compression, work done by the gas is negative: with $Q=0$ and $W=-200\,\mathrm J$, $\Delta U=+200\,\mathrm J$. Using positive received work instead gives $w=-W$ and $\Delta U=Q+w$; both balances express the same conservation law.

For volume work against a defined external pressure,
$$
W=\int_{V_i}^{V_f}p_{\mathrm{ext}}\,dV.
$$
In a mechanically reversible process, external pressure differs infinitesimally from gas pressure, allowing $W=\int p\,dV$. The result is the signed area under the path in the $p,V$ plane: positive during expansion and negative during compression. The product $1\,\mathrm{kPa}\cdot1\,\mathrm L$ equals $1\,\mathrm J$.

![Two mechanically reversible paths between identical states: expansion at high or low pressure with different work areas](/figure/fisica-semestre-filtro/termodinamica/lavoro-en.svg)

In the figure, travelling from $A$ to $B$ gives $600\,\mathrm J$ of work along the path expanding at $300\,\mathrm{kPa}$ and $200\,\mathrm J$ along the path at $100\,\mathrm{kPa}$. Internal energy change is the same, so the heats also differ by $400\,\mathrm J$. In open systems, energy carried by matter requires additional terms: the closed-system balance cannot be applied directly to the entire organism.
:::

## Canonical processes and reversibility

:::definizione{titolo="Quasistatic and reversible"}
A **quasistatic** process passes through states arbitrarily close to equilibrium, allowing state variables to be assigned along the path. **Reversibility** additionally requires that the process can be reversed while restoring both system and surroundings without residual effects. Friction and heat exchange across finite temperature differences make a process irreversible even when part of its evolution is slow.

A gas expanding into a vacuum inside an isolated rigid vessel does no external work and receives no heat. For an ideal gas, $\Delta U=0$ implies equal initial and final temperatures. The process remains irreversible and is not a sequence of equilibrium states with uniform pressure. This case distinguishes thermal insulation from a reversible adiabatic process.
:::

:::osservazione{#trasformazioni titolo="Four ideal-gas processes"}
The following relations concern fixed amount and composition, only volume work, and constant molar heat capacities where used.

| Process | Constraint | Balance and relation |
| --- | --- | --- |
| isochoric | constant volume | $W=0$, $Q=\Delta U=nC_V\Delta T$ |
| mechanically reversible isobaric | constant pressure | $W=p\Delta V=nR\Delta T$, $Q=nC_p\Delta T$ |
| reversible isothermal | constant temperature | $\Delta U=0$, $W=Q=nRT\ln\dfrac{V_f}{V_i}$ |
| adiabatic | zero heat | $Q=0$, $\Delta U=-W$ |

For the isotherm, integrating $p=\dfrac{nRT}{V}$ produces the logarithm. The volume ratio is dimensionless, so litres can be used in both terms. A reversible isothermal expansion absorbs exactly the heat needed to balance the work done.

For a *reversible* adiabat, $dU=-p\,dV$ gives $nC_VdT=-nRT\,\dfrac{dV}{V}$. Integration yields
$$
TV^{\gamma-1}=\text{constant},\qquad pV^\gamma=\text{constant}.
$$
Work is $W=\dfrac{p_iV_i-p_fV_f}{\gamma-1}$. Temperature decreases during expansion because work is supplied by internal energy. Starting from the same state, pressure falls faster along a reversible adiabat than along an isotherm. The laws involving $\gamma$ require reversibility and do not describe the free expansion just discussed.

![Isobar, isotherm and reversible monatomic adiabat passing through the same initial state](/figure/fisica-semestre-filtro/termodinamica/trasformazioni-en.svg)
:::

## The second law, cycles and machines

:::teorema{#secondo-principio titolo="Process direction and cyclic machines"}
The first law permits energy balances that the second law excludes. The **Kelvin–Planck** statement forbids a cyclic machine whose sole result is converting all heat received from one reservoir into work. The **Clausius** statement forbids a process whose sole result is transferring heat from cold to hot. A refrigerator achieves this transfer by receiving work, so transfer is not its only effect.

In a cycle, the final state equals the initial state, giving $\Delta U=0$ and $W_{\mathrm{cycle}}=Q_{\mathrm{cycle}}$. For a mechanically reversible cycle with only volume work, net work equals the enclosed area in the $p,V$ plane and is positive for clockwise traversal. A closed curve does not imply zero work: it is changes in state functions that vanish.

For an engine absorbing positive heat quantity $Q_h$ from the hot reservoir and rejecting positive quantity $Q_c$ to the cold reservoir,
$$
W=Q_h-Q_c,\qquad \eta=\dfrac{W}{Q_h}=1-\dfrac{Q_c}{Q_h}.
$$
Here $Q_c$ is the magnitude of rejected heat; signed heat received by the engine in that exchange is $-Q_c$. At frequency $f$ cycles per second, mechanical power is $P=fW$. Efficiency compares consistent energies or powers and is dimensionless.
:::

:::teorema{titolo="Carnot and refrigerator performance"}
The **Carnot** cycle consists of isothermal expansion at $T_h$, reversible adiabatic expansion to $T_c$, isothermal compression at $T_c$ and reversible adiabatic compression back to the initial state. All stages are reversible, and the two reservoirs maintain absolute temperatures $T_h>T_c>0$.

![Monatomic-gas Carnot cycle with two isotherms at a two-to-one temperature ratio and two reversible adiabats](/figure/fisica-semestre-filtro/termodinamica/carnot-en.svg)

For this cycle, $\dfrac{Q_c}{Q_h}=\dfrac{T_c}{T_h}$, hence
$$
\eta_C=1-\dfrac{T_c}{T_h}.
$$
No engine between the same reservoirs can exceed this efficiency; equality is attained in the reversible limit. Raising $T_h$ or lowering $T_c$ raises the limit, but the result depends on the kelvin ratio. The theoretical value does not specify power: the quasistatic limit can involve very long times.

For a refrigerator, use positive incoming work $W_{\mathrm{in}}=Q_h-Q_c$. The coefficient of performance is $\mathrm{COP}_R=\dfrac{Q_c}{W_{\mathrm{in}}}$; for a heat pump, the useful output is $Q_h$, giving $\mathrm{COP}_H=\dfrac{Q_h}{W_{\mathrm{in}}}=\mathrm{COP}_R+1$. A COP above one is consistent with the balance because the machine transfers heat already present. In the reversible limit, $\mathrm{COP}_{R,C}=\dfrac{T_c}{T_h-T_c}$.
:::

## Entropy and irreversibility

:::definizione{#entropia titolo="Entropy change between two states"}
To compare processes satisfying the same energy balance, introduce **entropy**, a state function measured in $\mathrm{J\,K^{-1}}$. Its change is calculated along a reversible path between the specified states:
$$
\Delta S=\int_i^f\dfrac{\delta Q_{\mathrm{rev}}}{T}.
$$
The calculation path can differ from the actual process. An ideal reservoir at constant temperature absorbing $Q$ has $\Delta S=\dfrac{Q}{T}$. For a body of constant heat capacity $C=mc$, without transitions and under the stated conditions, $\Delta S=C\ln(\dfrac{T_f}{T_i})$. The logarithm comes from integrating $\dfrac{C\,dT}{T}$; using only the final temperature in $\dfrac{Q}{T_f}$ would ignore its change during heating.

For a reversible transition at coexistence temperature $T_0$, melting gives $\Delta S=\dfrac{m\ell_f}{T_0}$. For an ideal gas with constant $C_V$,
$$
\Delta S=nC_V\ln\dfrac{T_f}{T_i}+nR\ln\dfrac{V_f}{V_i}.
$$
All temperature ratios use kelvin. The gas formula applies between equilibrium states even when the actual path is irreversible. In ideal free expansion, $T_f=T_i$ but $V_f>V_i$, so $\Delta S=nR\ln(\dfrac{V_f}{V_i})>0$ despite zero actual heat.
:::

:::teorema{titolo="Total entropy and statistical interpretation"}
For system and surroundings considered together as an isolated whole,
$$
\Delta S_{\mathrm{tot}}=\Delta S_{\mathrm{sys}}+\Delta S_{\mathrm{surr}}\ge0.
$$
Equality characterises the reversible limit; an irreversible process generates entropy. One part can decrease its entropy provided other contributions compensate. For a cyclic machine, the working fluid's $\Delta S$ is zero even if the cycle is irreversible; the total increase includes the reservoirs.

Transferring $2000\,\mathrm J$ from a reservoir at $400\,\mathrm K$ to one at $250\,\mathrm K$ gives $\Delta S_h=-5\,\mathrm{J\,K^{-1}}$ and $\Delta S_c=+8\,\mathrm{J\,K^{-1}}$. Their sum is positive. The reverse direction as the sole effect would give a negative sum and is excluded.

![Entropy changes of hot and cold reservoirs and total increase for 2000 joules transferred from 400 to 250 kelvin](/figure/fisica-semestre-filtro/termodinamica/entropia-en.svg)

In Boltzmann's statistical interpretation, $S=k_B\ln\Omega$, where $k_B=1.380649\cdot10^{-23}\,\mathrm{J\,K^{-1}}$ and $\Omega$ counts equally probable microstates compatible with the macrostate. If their number increases by a factor $r$, $\Delta S=k_B\ln r$. For an isolated macroscopic system, macrostates with greater multiplicity are overwhelmingly more probable. This interpretation concerns probabilities and physical constraints; the general word disorder does not replace counting or an entropy balance.
:::
