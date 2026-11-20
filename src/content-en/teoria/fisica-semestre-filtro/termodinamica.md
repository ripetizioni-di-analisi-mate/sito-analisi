---
titolo: Temperature, heat and thermodynamics
sommario: States and ideal gases, calorimetry, heat transfer, work, reversible and irreversible processes, Carnot engines and entropy.
---

## Systems, equilibrium and temperature

:::definizione{#stato-termico titolo="System and state variables"}
Thermodynamics studies the exchanges of energy between a body and its surroundings. The body under study, for example a gas enclosed in a cylinder, is called the **system**. Everything else is the **surroundings**. A system is of three types, according to what it exchanges with the surroundings.

- An **open** system exchanges matter and energy. A living organism is an open system.
- A **closed** system exchanges energy and not matter. An example is a gas in a cylinder closed by a piston.
- An **isolated** system exchanges neither matter nor energy. An example, approximately, is the contents of a vacuum flask.

A wall that does not let heat through is called **adiabatic**.

The **state** of a system is described by a few measurable quantities, called **state variables**: pressure $p$, volume $V$, temperature $T$ and amount of substance $n$, measured in moles. These quantities have a definite value only if the system is in **equilibrium**, that is, if pressure and temperature are the same at all its points and do not change over time.

A **state function** is a quantity whose value depends only on the state the system is in, and not on how it got there. Internal energy $U$ and entropy $S$ are state functions. Heat and work are not: they are amounts of energy exchanged during a process, and their value depends on how the process takes place.
:::

:::osservazione{titolo="Temperature scales and thermometers"}
Two bodies in contact exchange energy until they reach the same temperature. At that point they are in **thermal equilibrium**. The **zeroth law** of thermodynamics states that, if two bodies are each in thermal equilibrium with a third body, they are in thermal equilibrium with each other. The thermometer, which is the third body, is based on this. Temperature is measured in degrees Celsius or in kelvin, the unit of the International System. Temperature in kelvin is also called absolute temperature. The conversion is:
$$
T\,(\mathrm K)=t\,({}^\circ\mathrm C)+273.15.
$$
A temperature of $15\,{}^\circ\mathrm C$ corresponds to $288.15\,\mathrm K$. The two scales have degrees of the same size, so a temperature difference has the same value in both units: an increase of $15\,{}^\circ\mathrm C$ is an increase of $15\,\mathrm K$. In formulas containing a difference $\Delta T$ either scale may be used. In formulas containing the temperature $T$ alone, such as the gas laws, or a ratio of temperatures, kelvin are always used.
:::

## Ideal gases and heat capacities

:::teorema{#gas-ideale titolo="Ideal-gas equation of state"}
An **ideal gas** is a model in which molecules are points without volume, which do not attract one another and interact only by colliding. Real gases behave this way when they are not dense and are far from the temperature at which they become liquid. Air at room temperature is an ideal gas to a good approximation. Pressure, volume and temperature of $n$ moles of ideal gas are linked by the **equation of state**:
$$
pV=nRT,\qquad R\simeq8.314\,\mathrm{J\,mol^{-1}K^{-1}}.
$$
The constant $R$ is the same for all gases. In the formula the pressure is absolute, in pascals, the volume is in cubic metres and the temperature in kelvin. One mole of gas at $0\,{}^\circ\mathrm C$ ($273.15\,\mathrm K$) and atmospheric pressure ($1.013\cdot10^5\,\mathrm{Pa}$) occupies $V=\dfrac{nRT}{p}=\dfrac{1\cdot8.314\cdot273.15}{1.013\cdot10^5}\simeq0.0224\,\mathrm{m^3}=22.4\,\mathrm L$.

If the amount of gas stays the same, between two states $\dfrac{p_1V_1}{T_1}=\dfrac{p_2V_2}{T_2}$ holds. Three laws follow, one for each quantity held constant.

- At constant temperature pressure is inversely proportional to volume (**Boyle's law**). If the volume halves, the pressure doubles.
- At constant pressure volume is proportional to absolute temperature (**Charles's law**).
- At constant volume pressure is proportional to absolute temperature (**Gay-Lussac's law**).
:::

:::definizione{titolo="Internal energy and degrees of freedom"}
The **internal energy** $U$ of a system is the sum of the energies of all its molecules, that is, the kinetic energy of their disordered motion and the potential energy of their interactions. In an ideal gas the molecules do not interact, so internal energy is only kinetic energy and depends on temperature alone. If the temperature goes from $T_i$ to $T_f$, the internal energy changes by:
$$
\Delta U=nC_V(T_f-T_i)
$$
The quantity $C_V$ is the **molar heat capacity at constant volume**, that is, the energy needed to raise by one kelvin the temperature of one mole of gas held at fixed volume. Its value depends on the type of molecule. For a **monatomic** gas, such as helium, $C_V=\dfrac32R$. For a **diatomic** gas, such as nitrogen and oxygen, $C_V=\dfrac52R$, because the molecules rotate as well as move.

If the gas is heated at constant pressure it expands and does work on the surroundings. More energy is therefore needed to obtain the same temperature rise. The **molar heat capacity at constant pressure** $C_p$ is thus larger than $C_V$, and for an ideal gas $C_p=C_V+R$ (Mayer's relation). The ratio $\gamma=\dfrac{C_p}{C_V}$ is $\dfrac53$ for a monatomic gas and $\dfrac75$ for a diatomic gas.
:::

## Heat and calorimetric balances

:::definizione{#calorimetria titolo="Heat capacity and specific heat capacity"}
**Heat** $Q$ is the energy passing from a hotter body to a colder one because of the temperature difference. It is measured in joules. By convention it is positive when it enters the system and negative when it leaves. Heat and temperature are different quantities: temperature describes the state of a body, heat is energy in transit.

The heat needed to change by $\Delta T$ the temperature of a body of mass $m$, without a change of state, is:
$$
Q=mc\Delta T=C\Delta T.
$$
**Specific heat** $c$ is the energy needed to raise by one kelvin the temperature of one kilogram of substance. It is measured in $\mathrm{J\,kg^{-1}K^{-1}}$. Water has a very high specific heat, $4186\,\mathrm{J\,kg^{-1}K^{-1}}$, so it warms and cools slowly. **Heat capacity** $C=mc$ is the same quantity referred to the whole body. Heating $2\,\mathrm{kg}$ of water from $20\,{}^\circ\mathrm C$ to $50\,{}^\circ\mathrm C$ requires $Q=2\cdot4186\cdot30\simeq2.5\cdot10^5\,\mathrm J$.

When several bodies at different temperatures are put in contact in an insulated container, called a **calorimeter**, the heat given up by the hot bodies equals that absorbed by the cold ones. The sum of the heats exchanged, each with its sign, is therefore zero: $\sum_i m_ic_i(T_f-T_i)=0$. All the bodies reach the same final temperature $T_f$, which is the unknown. For a hot body $T_f-T_i$ is negative and for a cold body it is positive.
:::

:::esempio{titolo="Final temperature is a weighted mean"}
$0.20\,\mathrm{kg}$ of water at $60\,{}^\circ\mathrm C$ and $0.30\,\mathrm{kg}$ of water at $20\,{}^\circ\mathrm C$ are mixed in an insulated container. The sum of the heats exchanged is zero, and the specific heat $c$ is the same for the two masses:
$$
0.20c(t_f-60)+0.30c(t_f-20)=0,
$$
$$
t_f=\dfrac{0.20\cdot60+0.30\cdot20}{0.50}=36\,{}^\circ\mathrm C.
$$
One divides by $c$ and isolates $t_f$. The final temperature, $36\,{}^\circ\mathrm C$, is closer to that of the larger mass. It is not the mean of the two temperatures, which would be $40\,{}^\circ\mathrm C$. If the two substances are different, each temperature is weighted by the product $mc$ of the corresponding body.
:::

## Phase changes and evaporation

:::definizione{#calore-latente titolo="Energy during phase coexistence"}
A substance passes from solid to liquid (melting) and from liquid to gas (vaporisation) by absorbing heat. During the change the temperature stays constant: all the energy absorbed serves to separate the molecules, and not to increase their speed. Melting ice stays at $0\,{}^\circ\mathrm C$ until it has all melted. The heat needed to change the state of a mass $m$ is:
$$
Q=m\ell
$$
The quantity $\ell$ is the **latent heat**, that is, the energy needed to change the state of one kilogram of substance. For water the latent heat of fusion is $3.34\cdot10^5\,\mathrm{J/kg}$ and that of vaporisation is $2.26\cdot10^6\,\mathrm{J/kg}$. In the reverse changes, freezing and condensation, the substance gives up the same amount of heat.

Bringing ice at $-30\,{}^\circ\mathrm C$ to water at $40\,{}^\circ\mathrm C$ requires three amounts of heat, which add.

1. The heat to warm the ice from $-30\,{}^\circ\mathrm C$ to $0\,{}^\circ\mathrm C$, $mc_{\mathrm{ice}}\Delta T$.
2. The heat to melt the ice at $0\,{}^\circ\mathrm C$, $m\ell_f$.
3. The heat to warm the water from $0\,{}^\circ\mathrm C$ to $40\,{}^\circ\mathrm C$, $mc_{\mathrm{water}}\Delta T$.

In the graph of temperature against heat supplied, stages 1 and 3 are sloping stretches and stage 2 is a horizontal stretch.

![Heating curve for 0.200 kg of ice from minus 30 degrees to water at 40 degrees, with a melting plateau](/figure/fisica-semestre-filtro/termodinamica/riscaldamento-en.svg)

When ice is put into lukewarm water, before writing the balance two energies are compared: the one the water gives up in cooling to $0\,{}^\circ\mathrm C$ and the one needed to melt all the ice. If the first is larger, all the ice melts and the final temperature is above $0\,{}^\circ\mathrm C$. If it is smaller, only part of the ice melts and the mixture stays at $0\,{}^\circ\mathrm C$.
:::

:::osservazione{titolo="Evaporation and the body's energy balance"}
**Evaporation** is the change from liquid to gas taking place at the surface of the liquid, at any temperature. **Boiling** takes place throughout the liquid, with formation of bubbles, at a precise temperature. Evaporation removes heat from the remaining liquid and from the surface it lies on. The human body cools in this way through sweat. At body temperature the latent heat of vaporisation of water is about $2.4\,\mathrm{kJ/g}$, so the evaporation of $10\,\mathrm g$ of sweat removes $10\cdot2.4=24\,\mathrm{kJ}$ from the body. Only sweat that evaporates counts. Sweat that drips off does not cool. In very humid air sweat evaporates slowly, and for this reason humid heat is harder to bear.
:::

## Heat transfer

:::definizione{#trasmissione-calore titolo="Conduction, convection and radiation"}
Heat is transferred in three ways: conduction, convection and radiation.

In **conduction** heat passes through a material without the material moving. The molecules of the hot part, which are faster, collide with their neighbours and give them energy. It is the typical mode in solids. The power $P$ crossing a slab of area $A$ and thickness $L$, with its two faces at temperatures $T_h$ and $T_c$, is given by **Fourier's law**:
$$
P=\kappa A\dfrac{T_h-T_c}{L}.
$$
Power is the heat passing in one second, in watts, so in a time $\Delta t$ the heat $Q=P\,\Delta t$ passes. The constant $\kappa$ is the **thermal conductivity** of the material. It is high in metals, which are good conductors, and low in air, wood and fat, which are insulators. The heat passing increases with area and with temperature difference and decreases with thickness. Through a pane of glass of area $1.0\,\mathrm{m^2}$ and thickness $5.0\,\mathrm{mm}$, with $\kappa=0.80\,\mathrm{W\,m^{-1}K^{-1}}$ and a difference of $10\,\mathrm K$ between the faces, $0.80\cdot1.0\cdot\dfrac{10}{0.0050}=1600\,\mathrm W$ pass.

The law is also written as $P=\dfrac{T_h-T_c}{R_{\mathrm{th}}}$, where $R_{\mathrm{th}}=\dfrac{L}{\kappa A}$ is the **thermal resistance** of the slab. If heat crosses several layers one after another, such as a wall with an insulating panel, the thermal resistances add. The largest temperature difference is found across the layer with the largest resistance, that is, the most insulating layer.

![Steady temperature profile through two layers in series, with a larger drop across the more resistant layer](/figure/fisica-semestre-filtro/termodinamica/conduzione-en.svg)

In **convection** heat is carried by a moving fluid. Air in contact with a radiator warms up, becomes less dense and rises, and cold air takes its place. The movement is spontaneous, as in this case, or forced by a pump or a fan. Blood carries heat from the inside of the body to the skin by forced convection. The power exchanged between a surface at temperature $T_s$ and a fluid at temperature $T_f$ is $P=hA(T_s-T_f)$. The coefficient $h$ depends on the fluid and on its speed, and this is why wind cools.
:::

:::teorema{titolo="Net radiative exchange"}
In **radiation** heat is carried by electromagnetic waves, which also propagate in a vacuum. It is the way the Sun's heat reaches the Earth. Every body emits radiation, the more so the hotter it is, and absorbs that emitted by the bodies around it. A body of area $A$ at temperature $T$, in surroundings at temperature $T_a$, loses by radiation the net power given by the **Stefan-Boltzmann law**:
$$
P_{\mathrm{net}}=\varepsilon\sigma A(T^4-T_a^4),
$$
In the formula $\sigma\simeq5.67\cdot10^{-8}\,\mathrm{W\,m^{-2}K^{-4}}$ is a universal constant and temperatures are in kelvin. The **emissivity** $\varepsilon$ is a number between 0 and 1 that depends on the surface. It is nearly 1 for a dark matt surface, and also for human skin, and nearly 0 for a shiny surface. The term $T^4$ is the radiation emitted and the term $T_a^4$ is that absorbed. If the body is hotter than the surroundings the net power is positive and the body loses energy. If it is at the same temperature the net power is zero.

![Net radiative power of a one-square-metre surface with emissivity 0.90 in surroundings at 293.15 kelvin](/figure/fisica-semestre-filtro/termodinamica/irraggiamento-en.svg)

The power emitted depends on the fourth power of absolute temperature. At double the absolute temperature it is $2^4=16$ times larger. A person at rest in a room gives up heat to the surroundings in all ways together: radiation, convection, conduction and evaporation of sweat. In a balance each contribution is calculated separately.
:::

## Work, paths and the first law

:::teorema{#primo-principio titolo="Sign convention and energy balance"}
A system exchanges energy with its surroundings in two ways, as heat $Q$ and as work $W$. The **first law of thermodynamics** is conservation of energy: the change in internal energy equals the energy entering minus the energy leaving. With the convention used here, $Q$ is positive if heat enters the system and $W$ is positive if work is done by the system on the surroundings. Then:
$$
\Delta U=Q-W.
$$
A gas absorbing $500\,\mathrm J$ of heat and doing $200\,\mathrm J$ of work as it expands increases its internal energy by $500-200=300\,\mathrm J$. A gas compressed without exchanging heat receives work, so $W$ is negative. With $Q=0$ and $W=-200\,\mathrm J$ one has $\Delta U=0-(-200)=+200\,\mathrm J$: the gas warms up. Some texts use the opposite convention for work and write $\Delta U=Q+W$, with $W$ positive if received by the system.

A gas does work when it changes volume. If it expands it pushes the piston and the work is positive, if it is compressed the work is negative. At constant pressure $W=p\,\Delta V$. If the pressure changes, the work is the integral:
$$
W=\int_{V_i}^{V_f}p_{\mathrm{ext}}\,dV.
$$
If the process is slow, the external pressure is at every instant equal to that of the gas. In a graph with volume on the horizontal axis and pressure on the vertical axis, called the $p$-$V$ plane, the work is the area under the curve representing the process. With pressure in kPa and volume in litres the product gives joules directly, because $1\,\mathrm{kPa}\cdot1\,\mathrm L=10^3\,\mathrm{Pa}\cdot10^{-3}\,\mathrm{m^3}=1\,\mathrm J$.

![Two mechanically reversible paths between identical states: expansion at high or low pressure with different work areas](/figure/fisica-semestre-filtro/termodinamica/lavoro-en.svg)

The figure shows that work depends on the path. The gas goes from state A to state B, with a volume increase of $2\,\mathrm L$, in two ways. If it expands at a pressure of $300\,\mathrm{kPa}$ it does $300\cdot2=600\,\mathrm J$. If it expands at $100\,\mathrm{kPa}$ it does $100\cdot2=200\,\mathrm J$. Internal energy is a state function, so $\Delta U$ is the same in both cases. By the first law, $Q=\Delta U+W$, the heat too differs between the two paths, by $400\,\mathrm J$.
:::

## Canonical processes and reversibility

:::definizione{titolo="Quasistatic and reversible"}
A process is **reversible** if it takes place so slowly that the system stays in equilibrium at every instant, without friction, and can be retraced backwards bringing system and surroundings exactly back to the initial state. It is an ideal limiting case. Real processes are **irreversible**: they take place in a finite time, with friction or with heat passing between bodies at different temperatures. Only a reversible process is represented by a curve in the $p$-$V$ plane, because only in it are pressure and volume defined at every instant.

**Free expansion** is an example of an irreversible process. An ideal gas occupies half of an insulated container, and the other half is empty. The dividing wall is removed and the gas occupies the whole container. The gas pushes nothing, so $W=0$. The container is insulated, so $Q=0$. By the first law $\Delta U=0$, and in an ideal gas this means that the temperature does not change. The gas does not return on its own to the initial half.
:::

:::osservazione{#trasformazioni titolo="Four ideal-gas processes"}
The simplest processes of an ideal gas are four. In each one a quantity stays constant, or there is no exchange of heat. The name indicates what stays constant: volume in the **isochoric** process, pressure in the **isobaric**, temperature in the **isothermal**. In the **adiabatic** process the heat exchanged is zero.

| Process | Constraint | Balance and relation |
| --- | --- | --- |
| isochoric | constant volume | $W=0$, $Q=\Delta U=nC_V\Delta T$ |
| mechanically reversible isobaric | constant pressure | $W=p\Delta V=nR\Delta T$, $Q=nC_p\Delta T$ |
| reversible isothermal | constant temperature | $\Delta U=0$, $W=Q=nRT\ln\dfrac{V_f}{V_i}$ |
| adiabatic | zero heat | $Q=0$, $\Delta U=-W$ |

The table is read row by row with the first law.

- In the isochoric process the volume does not change, so the work is zero and all the heat absorbed increases the internal energy.
- In the isobaric process the gas exchanges both work and heat.
- In the isothermal process the temperature does not change, so $\Delta U=0$ and all the heat absorbed becomes work. The logarithm comes from the integral of $p=\dfrac{nRT}{V}$.
- In the adiabatic process there is no heat, so the work is done at the expense of internal energy. A gas expanding adiabatically cools, and one being compressed warms up.

For a reversible adiabatic process the following relations also hold, in which the ratio $\gamma=\dfrac{C_p}{C_V}$ appears:
$$
TV^{\gamma-1}=\text{constant},\qquad pV^\gamma=\text{constant}.
$$
The work in a reversible adiabatic process is $W=\dfrac{p_iV_i-p_fV_f}{\gamma-1}$. In the $p$-$V$ plane the adiabat falls more steeply than the isotherm starting from the same point. In an adiabatic expansion, in fact, besides the volume increasing there is the temperature decreasing, and the pressure falls for both reasons. These formulas hold for reversible adiabatic processes. They do not hold for free expansion, which is adiabatic and irreversible.

![Isobar, isotherm and reversible monatomic adiabat passing through the same initial state](/figure/fisica-semestre-filtro/termodinamica/trasformazioni-en.svg)
:::

## The second law, cycles and machines

:::teorema{#secondo-principio titolo="Process direction and cyclic machines"}
The first law says that energy is conserved. It does not say in which direction processes occur. A hot coffee in a room cools down and does not warm up on its own, although energy would be conserved in both cases. The **second law of thermodynamics** establishes the direction. It has two equivalent statements.

- **Clausius statement.** Heat does not pass spontaneously from a cold body to a hot one. Making it pass requires work, and this is what a refrigerator does.
- **Kelvin-Planck statement.** No machine working in a cycle converts into work all the heat it takes from a single source. Part of the heat is always given up to a colder source.

A **heat engine** is a device that converts heat into work by repeating a **cycle**, that is, a series of processes bringing the system back to its initial state. A petrol engine is a heat engine. At the end of each cycle the internal energy has returned to its initial value, so $\Delta U=0$ and the work done equals the net heat absorbed. In the $p$-$V$ plane a cycle is a closed curve and the work is the enclosed area, positive if the cycle is traversed clockwise.

In each cycle the engine absorbs heat $Q_h$ from a hot source, converts part of it into work $W$ and gives up the rest, $Q_c$, to a cold source. The **efficiency** $\eta$ is the fraction of the heat absorbed that becomes work:
$$
W=Q_h-Q_c,\qquad \eta=\dfrac{W}{Q_h}=1-\dfrac{Q_c}{Q_h}.
$$
In the formulas $Q_h$ and $Q_c$ are both taken as positive numbers. An engine that in each cycle absorbs $1000\,\mathrm J$ and gives up $700\,\mathrm J$ does $300\,\mathrm J$ of work and has efficiency $\dfrac{300}{1000}=0.30$, that is, 30%. By the second law $Q_c$ is never zero, so the efficiency is always less than 1.
:::

:::teorema{titolo="Carnot and refrigerator performance"}
The **Carnot cycle** is the ideal cycle giving the maximum possible efficiency between two sources at temperatures $T_h$ and $T_c$. It consists of four reversible processes of a gas.

1. An isothermal expansion at temperature $T_h$, in which the gas absorbs heat $Q_h$.
2. An adiabatic expansion, in which the gas cools from $T_h$ to $T_c$.
3. An isothermal compression at temperature $T_c$, in which the gas gives up heat $Q_c$.
4. An adiabatic compression, in which the gas warms from $T_c$ to $T_h$ and returns to the initial state.

![Monatomic-gas Carnot cycle with two isotherms at a two-to-one temperature ratio and two reversible adiabats](/figure/fisica-semestre-filtro/termodinamica/carnot-en.svg)

In this cycle the heats exchanged are in the same ratio as the absolute temperatures of the sources, $\dfrac{Q_c}{Q_h}=\dfrac{T_c}{T_h}$. The efficiency is therefore:
$$
\eta_C=1-\dfrac{T_c}{T_h}.
$$
Temperatures are in kelvin. **Carnot's theorem** states that no engine working between the same two temperatures has a higher efficiency. Between a source at $500\,\mathrm K$ and one at $300\,\mathrm K$ the maximum efficiency is $1-\dfrac{300}{500}=0.40$. A real engine between the same temperatures is less efficient, because of friction and other irreversibilities. The maximum efficiency increases if the difference between the two temperatures increases.

A **refrigerator** is a heat engine running in reverse. It receives work $W_{\mathrm{in}}$, removes heat $Q_c$ from the cold source, that is, the inside of the refrigerator, and gives up heat $Q_h=Q_c+W_{\mathrm{in}}$ to the hot source, that is, the room. Its effectiveness is measured by the **coefficient of performance**, $\mathrm{COP}_R=\dfrac{Q_c}{W_{\mathrm{in}}}$, which is the heat removed per joule of work spent. A **heat pump** is the same machine used for heating, and its coefficient is $\mathrm{COP}_H=\dfrac{Q_h}{W_{\mathrm{in}}}=\mathrm{COP}_R+1$. These coefficients are generally greater than 1, because the machine moves heat that already exists and does not produce it. The maximum value for a refrigerator, reached with a Carnot cycle, is $\dfrac{T_c}{T_h-T_c}$.
:::

## Entropy and irreversibility

:::definizione{#entropia titolo="Entropy change between two states"}
**Entropy** $S$ is the quantity that allows the second law to be expressed with a number. It is a state function and is measured in $\mathrm{J\,K^{-1}}$. When a system at temperature $T$ absorbs a small amount of heat reversibly, its entropy increases by that heat divided by the temperature. For a process between two states the change is:
$$
\Delta S=\int_i^f\dfrac{\delta Q_{\mathrm{rev}}}{T}.
$$
Entropy is a state function, so its change depends only on the initial and final states. For an irreversible process it is calculated along any reversible process between the same two states. There are four frequent cases.

- **Heat exchange at constant temperature.** A body absorbing heat $Q$ while staying at temperature $T$ has $\Delta S=\dfrac{Q}{T}$. If it gives up heat, $Q$ is negative and entropy decreases.
- **Change of state.** The temperature is constant, so for melting $\Delta S=\dfrac{m\ell_f}{T_0}$. One kilogram of ice melting at $273\,\mathrm K$ increases its entropy by $\dfrac{3.34\cdot10^5}{273}\simeq1220\,\mathrm{J\,K^{-1}}$.
- **Heating of a body.** The temperature changes during the exchange, so $\dfrac{mc\,dT}{T}$ is integrated and one obtains $\Delta S=mc\ln\left(\dfrac{T_f}{T_i}\right)$.
- **Ideal gas.** Entropy changes both with temperature and with volume:
$$
\Delta S=nC_V\ln\dfrac{T_f}{T_i}+nR\ln\dfrac{V_f}{V_i}.
$$
In all the formulas temperatures are in kelvin. In the free expansion of an ideal gas the temperature does not change and the volume increases, so $\Delta S=nR\ln\left(\dfrac{V_f}{V_i}\right)>0$. The entropy of the gas increases even though the gas has exchanged no heat, because the process is irreversible.
:::

:::teorema{titolo="Total entropy and statistical interpretation"}
The second law is stated in terms of entropy as follows. In every process the total entropy, that is, the sum of the entropy of the system and that of the surroundings, does not decrease:
$$
\Delta S_{\mathrm{tot}}=\Delta S_{\mathrm{sys}}+\Delta S_{\mathrm{surr}}\ge0.
$$
Total entropy stays constant in reversible processes and increases in irreversible ones, that is, in all real processes. The entropy of a single part may decrease, provided that of the rest increases more. Water freezing in a freezer loses entropy, and the room, which receives heat from the freezer, gains more.

An example shows the link with the Clausius statement. A heat of $2000\,\mathrm J$ passes from a body at $400\,\mathrm K$ to a body at $250\,\mathrm K$. The hot body loses entropy, $\Delta S_h=\dfrac{-2000}{400}=-5\,\mathrm{J\,K^{-1}}$. The cold body gains it, $\Delta S_c=\dfrac{+2000}{250}=+8\,\mathrm{J\,K^{-1}}$. The total is $+3\,\mathrm{J\,K^{-1}}$, positive, so the transfer occurs spontaneously. The opposite transfer, from the cold body to the hot one, would give $-3\,\mathrm{J\,K^{-1}}$ and does not occur on its own.

![Entropy changes of hot and cold reservoirs and total increase for 2000 joules transferred from 400 to 250 kelvin](/figure/fisica-semestre-filtro/termodinamica/entropia-en.svg)

Entropy also has a microscopic meaning. One and the same state of the gas, with a given pressure and temperature, corresponds to a very large number of different arrangements of the single molecules, called **microstates**. **Boltzmann's formula** links entropy to the number $\Omega$ of microstates: $S=k_B\ln\Omega$, with $k_B=1.38\cdot10^{-23}\,\mathrm{J\,K^{-1}}$. A state with more microstates is more probable and has higher entropy. A gas free to occupy a whole container has many more ways of arranging itself than a gas gathered in one half, and for this reason it expands and does not gather on its own. The increase in entropy is therefore the passage towards the most probable states.
:::
