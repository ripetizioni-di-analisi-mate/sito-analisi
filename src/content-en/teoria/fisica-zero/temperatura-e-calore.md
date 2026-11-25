---
titolo: Temperature, heat, and changes of state
sommario: Temperature and its scales, energy transferred as heat, heating objects, equilibrium between objects at different temperatures, and changes of state.
---

## Temperature and thermal equilibrium

:::definizione{#temperatura titolo="Temperature"}
**Temperature** is the quantity that tells us when two objects are in thermal equilibrium. Two objects in contact are in **thermal equilibrium** when they have the same temperature and the net transfer of energy due to a temperature difference is zero.

If a cup of hot water is left in a room, the water transfers energy to its surroundings and cools. If the room temperature stays constant, the water reaches that temperature given enough time. For example, water initially at $60\,^\circ\mathrm{C}$ approaches the room temperature of $20\,^\circ\mathrm{C}$.

Temperature is measured with a thermometer. The thermometer must exchange energy with the object until they reach thermal equilibrium, so a reading is not instantaneous. In an ideal measurement, the thermometer changes the temperature of the object by a negligible amount.
:::

:::teorema{#equilibrio-termico titolo="Zeroth law of thermodynamics"}
If two objects are each in thermal equilibrium with a third object, they are also in thermal equilibrium with each other. This experimentally established principle is the basis for comparing temperatures.

A thermometer that reads $25\,^\circ\mathrm{C}$ after reaching equilibrium with object $A$ and also with object $B$ indicates the same temperature for both objects. If $A$ and $B$ are brought into contact, the temperature difference between them is zero.
:::

:::osservazione{titolo="Measured temperature and the sense of touch"}
How an object feels to the touch also depends on the rate of energy transfer. A metal object and a wooden object, both at room temperature, can feel different to the hand. The metal can transfer energy faster than the wood and cool the skin more quickly. A thermometer brought into equilibrium with each object allows their temperatures to be compared. A description of heat transfer therefore distinguishes the measured temperature from the rate of transfer.
:::

## The Celsius and Kelvin scales

:::definizione{#scale-termometriche titolo="Degrees Celsius and kelvins"}
Temperature on the Celsius scale is expressed in **degrees Celsius**, with the symbol $^\circ\mathrm{C}$. For pure water at standard atmospheric pressure, $101\,325\,\mathrm{Pa}$, ice melts at about $0\,^\circ\mathrm{C}$ and water boils at about $100\,^\circ\mathrm{C}$.

The unit in the International System of Units is the **kelvin**, with the symbol $\mathrm{K}$. Zero on the Kelvin scale corresponds to $-273.15\,^\circ\mathrm{C}$ and is called absolute zero. A temperature interval of one kelvin is the same size as an interval of one degree Celsius.

Let $t_C$ denote the *numerical value* of the temperature in degrees Celsius and $T_K$ its numerical value in kelvins. The conversion formulas are
$$
T_K=t_C+273.15,
\qquad
t_C=T_K-273.15.
$$
For example, $20\,^\circ\mathrm{C}$ corresponds to $293.15\,\mathrm{K}$. The number increases by $273.15$ because the two scales have different zero points. The physical temperature of the object stays the same.

::grafico{assi=0 uguale=1 linee="0,0 8,0;0,2 8,2;1,-0.2 1,0.2;4,-0.2 4,0.2;7,-0.2 7,0.2;1,1.8 1,2.2;4,1.8 4,2.2;7,1.8 7,2.2" etichette="0.6,2.65,0 °C;3.6,2.65,50 °C;6.5,2.65,100 °C;0.3,-0.8,273.15 K;3.3,-0.8,323.15 K;6.3,-0.8,373.15 K" xmin=-0.4 xmax=8.8 ymin=-1.3 ymax=3.2 titolo="The intervals on the two scales are equal in size. A rise of $50\,^\circ\mathrm{C}$ corresponds to a rise of $50\,\mathrm{K}$"}
:::

:::osservazione{#variazione-temperatura titolo="Temperature change"}
The **temperature change** is the final temperature minus the initial temperature. The symbol $\Delta$, read “delta,” denotes this difference. Heating from $15\,^\circ\mathrm{C}$ to $35\,^\circ\mathrm{C}$ gives
$$
\Delta T=20\,\mathrm{K}.
$$
On the Kelvin scale, the same two temperatures are $288.15\,\mathrm{K}$ and $308.15\,\mathrm{K}$, so their difference is still $20\,\mathrm{K}$. Cooling from $35\,^\circ\mathrm{C}$ to $15\,^\circ\mathrm{C}$ gives $\Delta T=-20\,\mathrm{K}$ instead.
:::

:::attenzione
Do not add $273.15$ to a temperature difference. If the temperature rises by $10\,^\circ\mathrm{C}$, it rises by $10\,\mathrm{K}$. The value $283.15\,\mathrm{K}$, on the other hand, is the temperature corresponding to $10\,^\circ\mathrm{C}$.
:::

## Heat and internal energy

:::definizione{#calore titolo="Heat transfer"}
**Heat** is energy transferred between objects because of a temperature difference. It is denoted by $Q$ and measured in joules, with the symbol $\mathrm{J}$. In ordinary thermal contact, energy flows spontaneously from the object at the higher temperature to the one at the lower temperature.

Once an object is chosen as the system, take $Q>0$ when it absorbs heat and $Q<0$ when it releases heat. If a block releases $600\,\mathrm{J}$ to water, then for the block $Q=-600\,\mathrm{J}$. If the water receives all that energy, then for the water $Q=+600\,\mathrm{J}$.

**Internal energy** is the energy associated with the microscopic motion and interactions of the particles that make up an object. Heat describes a transfer of energy, while internal energy is a property of the object in its current state. In the heating processes considered here, work and other forms of energy transfer are negligible.
:::

:::osservazione
Temperature alone does not determine how much energy is needed to heat an object. For the same substance and the same temperature increase, a larger mass requires more energy. For example, two samples of water with masses of $1\,\mathrm{kg}$ and $2\,\mathrm{kg}$ can both be at $20\,^\circ\mathrm{C}$. To bring both to $30\,^\circ\mathrm{C}$, the second requires twice as much heat as the first.
:::

## Specific heat capacity and heating

:::definizione{#calore-specifico titolo="Specific heat capacity"}
The **specific heat capacity** $c$ of a substance is the heat needed to raise the temperature of one kilogram of that substance by one kelvin under the given conditions. Its unit is $\mathrm{J/(kg\cdot K)}$.

For liquid water, we use the approximate value $c_a=4180\,\mathrm{J/(kg\cdot K)}$ and take it to be constant over the temperature range in each problem. Therefore, one kilogram of water requires about $4180\,\mathrm{J}$ for a temperature increase of $1\,\mathrm{K}$. For aluminum, we use $c_{\mathrm{Al}}=900\,\mathrm{J/(kg\cdot K)}$ where specified. For the same mass and temperature increase, water requires more heat than aluminum.
:::

:::teorema{#legge-calorimetria titolo="The specific heat equation"}
For a homogeneous object of mass $m$ with specific heat capacity $c$ assumed constant, the heat transferred is
$$
Q=mc\Delta T
$$
when its temperature changes by $\Delta T$ without a change of state under the conditions for which $c$ is given. This empirical relation describes the heating and cooling of many solids and liquids under ordinary conditions.

The formula can also be used to find one of the other quantities. For $m>0$ and $c>0$, it gives
$$
\Delta T=\frac{Q}{mc}.
$$
Multiplying the units $\mathrm{kg}$, $\mathrm{J/(kg\cdot K)}$, and $\mathrm{K}$ gives $\mathrm{J}$, so the result is an energy. If the object cools, the temperature change is negative, so $Q$ is negative as well.
:::

:::esempio{titolo="Heating half a kilogram of water"}
To heat $0.50\,\mathrm{kg}$ of water from $20\,^\circ\mathrm{C}$ to $30\,^\circ\mathrm{C}$ without losses, first calculate $\Delta T=10\,\mathrm{K}$. Then
$$
Q=0.50\,\mathrm{kg}\cdot4180\,\mathrm{J/(kg\cdot K)}\cdot10\,\mathrm{K}
=20\,900\,\mathrm{J}.
$$
The result is positive because the water absorbs energy.

::grafico{f="2.09*x" xmin=0 xmax=20 ymin=0 ymax=45 nomi="ΔT,Q" legenda=0 punti="10,20.9,pieno" titolo="For $0.50\,\mathrm{kg}$ of water, the heat $Q$ in kilojoules is proportional to $\Delta T$ in kelvins. A rise of $10\,\mathrm{K}$ corresponds to $20.9\,\mathrm{kJ}$"}
:::

## Heat capacity

:::definizione{#capacita-termica titolo="Heat capacity of an object"}
The **heat capacity** $C$ of an object is the heat transferred divided by the temperature change, provided the change is nonzero and there is no change of state. It is measured in $\mathrm{J/K}$ and is given by
$$
C=\frac{Q}{\Delta T}.
$$
For a homogeneous object under the conditions of the specific heat equation, this gives $C=mc$. Heat capacity therefore depends on both the substance and its mass. An aluminum block of mass $2\,\mathrm{kg}$ with $c=900\,\mathrm{J/(kg\cdot K)}$ has $C=1800\,\mathrm{J/K}$. Raising its temperature by $5\,\mathrm{K}$ requires $Q=C\Delta T=9000\,\mathrm{J}$.

Heat capacity can also describe an object made up of different parts if all the parts undergo the same temperature change. In that case, their heat capacities are added. An object with a heat capacity of $300\,\mathrm{J/K}$ requires $600\,\mathrm{J}$ for a temperature rise of $2\,\mathrm{K}$.
:::

## Thermal contact and mixing

::::teorema{#bilancio-termico titolo="Equilibrium temperature of two objects"}
Two objects are brought into contact in a container insulated from the surroundings. The heat capacity of the container is negligible, there are no changes of state, and the specific heat capacities remain constant. Let $m_1,m_2$ denote the masses, $c_1,c_2$ the specific heat capacities, and $t_1,t_2$ the initial temperatures in degrees Celsius. The common final temperature is
$$
t_e=\frac{m_1c_1t_1+m_2c_2t_2}{m_1c_1+m_2c_2}.
$$
The temperatures in this formula are numerical values, all expressed on the same scale. The relation also holds when kelvins are used. The cooler object absorbs the heat released by the warmer object, so the final temperature lies between the two initial temperatures.

:::dimostrazione
The sum of the heat transfers must be zero because the system is isolated and the container absorbs negligible energy. Therefore,
$$
m_1c_1(t_e-t_1)+m_2c_2(t_e-t_2)=0.
$$
Collecting the terms that contain $t_e$ gives
$$
(m_1c_1+m_2c_2)t_e=m_1c_1t_1+m_2c_2t_2.
$$
The masses and specific heat capacities are positive, so dividing by $m_1c_1+m_2c_2$ gives the formula.
:::
::::

:::esempio{titolo="Mixing two samples of water"}
A sample of $1\,\mathrm{kg}$ of water at $60\,^\circ\mathrm{C}$ is mixed with $2\,\mathrm{kg}$ of water at $15\,^\circ\mathrm{C}$ under the conditions assumed in the energy balance. The specific heat capacities are equal, so they cancel, giving
$$
t_e=\frac{1\cdot60+2\cdot15}{1+2}=30.
$$
The final temperature is $30\,^\circ\mathrm{C}$. The larger mass of water undergoes a smaller temperature change. In fact, the hot water cools by $30\,\mathrm{K}$ and the cold water warms by $15\,\mathrm{K}$.

::grafico{assi=0 uguale=1 linee="0,0 0,2 2,2 2,0 0,0;4,0 4,2 6,2 6,0 4,0;8,0 8,2 10,2 10,0 8,0" vettori="6.4,1,7.6,1" etichette="2.8,1,+;0.3,1.2,1 kg;0.2,0.5,60 °C;4.3,1.2,2 kg;4.2,0.5,15 °C;8.3,1.2,3 kg;8.2,0.5,30 °C" xmin=-0.5 xmax=10.5 ymin=-0.5 ymax=2.7 titolo="The diagram shows the two initial samples combining to form $3\,\mathrm{kg}$ of water at a common temperature of $30\,^\circ\mathrm{C}$"}
:::

:::osservazione{titolo="Assumptions in the energy balance"}
The energy balance for two objects accounts for the energy exchanged throughout the process, from the initial moment until equilibrium. Thermal insulation makes heat transfer to or from the surroundings negligible. Since the container has negligible heat capacity, the energy it absorbs or releases is also negligible. If the container takes part in the exchange, the heat it absorbs or releases appears as an additional term in the sum. A common final temperature also assumes that the objects have been in contact long enough to reach equilibrium.
:::

## Changes between states of matter

:::definizione{#cambiamenti-di-stato titolo="Melting, freezing, and vaporization"}
**Melting** is the change from solid to liquid. **Freezing** is the reverse change. **Vaporization** is the change from liquid to vapor. **Condensation** is the reverse change.

When a pure substance melts in equilibrium at constant pressure, its temperature stays at the melting point as long as both phases are present. The heat absorbed allows the change of state to take place. The same is true during boiling at constant pressure. For example, ice and pure liquid water can coexist at about $0\,^\circ\mathrm{C}$ at standard atmospheric pressure.

Evaporation occurs at the surface of a liquid even at temperatures below its boiling point. Boiling, on the other hand, occurs throughout the liquid as vapor bubbles form. The boiling point depends on pressure, so the value of $100\,^\circ\mathrm{C}$ for water applies at standard atmospheric pressure.
:::

:::teorema{#calore-latente titolo="Heat required for a change of state"}
The heat absorbed in melting a mass $m$ already at its melting point is
$$
Q=mL_f,
$$
where $L_f$ is the specific latent heat of fusion, expressed in $\mathrm{J/kg}$. For vaporization at the boiling point, the relation is $Q=mL_v$ instead. These are empirical relations for the given substance and pressure.

For water at standard atmospheric pressure, we use $L_f=334\,000\,\mathrm{J/kg}$ and $L_v=2\,260\,000\,\mathrm{J/kg}$. Melting $0.10\,\mathrm{kg}$ of ice already at $0\,^\circ\mathrm{C}$ requires $33\,400\,\mathrm{J}$. When the same mass freezes, it releases $33\,400\,\mathrm{J}$, so for the water $Q=-33\,400\,\mathrm{J}$.
:::

:::osservazione{#processi-in-piu-fasi titolo="Heating in stages"}
Turning ice at $0\,^\circ\mathrm{C}$ into water at $20\,^\circ\mathrm{C}$ takes two stages. First the ice melts, then the liquid water warms. The total heat is the sum
$$
Q_{\mathrm{tot}}=mL_f+mc_a\Delta T.
$$
For $0.10\,\mathrm{kg}$, this gives $33\,400\,\mathrm{J}+8360\,\mathrm{J}=41\,760\,\mathrm{J}$. The temperature stays constant during the first stage and rises during the second.

::grafico{linee="0,0 33.4,0 41.76,20" xmin=0 xmax=50 ymin=-5 ymax=25 nomi="Q,t" titolo="Melting and heating $0.10\,\mathrm{kg}$ of ice initially at $0\,^\circ\mathrm{C}$. The heat $Q$ is in kilojoules and the temperature is in degrees Celsius"}
:::

## Modes of heat transfer

:::definizione{#propagazione-calore titolo="Conduction, convection, and radiation"}
In **conduction**, energy moves through a material without bulk movement of the material itself. A metal spoon immersed in hot water also warms along its handle because energy flows from the warmer parts to the cooler parts.

**Convection** involves the motion of a fluid, that is, a liquid or gas. In a pot heated from below, some portions of the liquid can rise and others sink, carrying energy with them. This circulation depends on density differences and on the conditions in the fluid.

In **radiation**, energy is carried by electromagnetic waves, which can also travel through a vacuum. Energy from the Sun reaches Earth in this way. An object emits and absorbs radiation. The net transfer depends on both the object and its surroundings.

In practice, several modes of heat transfer can act together. In a container of hot water, for example, energy can pass through the walls by conduction and then be transferred to the air by convection as well. An insulated container reduces heat transfer and therefore approximates the isolated system used in mixing problems.
:::
