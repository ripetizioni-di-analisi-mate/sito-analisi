---
titolo: "Changes of phase"
sommario: "Latent heat, heating curves, and balances with melting, vaporisation or condensation."
---

## States of matter

:::definizione{#stati titolo="Solid, liquid and gas"}
A **phase** is a part of a system with uniform physical properties. Ice and liquid water are two phases of the same substance. In a solid, particles oscillate without continually exchanging positions. In a liquid they can move past one another. In a gas they are further apart and the sample fills the available volume.
:::

:::osservazione{#coexist titolo="Coexistence and fixed pressure"}
A pure substance can have two phases in equilibrium at the transition temperature for the applied pressure. For example, at normal atmospheric pressure liquid water and ice can coexist near $0\,{}^\circ\mathrm C$. If energy enters and the liquid fraction increases, temperature stays approximately fixed while both phases remain. If the pressure changes, determine the transition temperature again.
:::

:::esempio{#frazioni titolo="Same temperature, different amounts of liquid"}
Two vessels contain $0.100$ and $0.200\,\mathrm{kg}$ of ice respectively at $0\,{}^\circ\mathrm C$. The pressure is normal atmospheric pressure. Each vessel receives $16.7\,\mathrm{kJ}$ of useful energy and the temperature stays at zero. With $L_f=334\,\mathrm{kJ/kg}$, $0.050\,\mathrm{kg}$ melts in each vessel. This mass is half the first sample and a quarter of the second.

Temperature alone identifies the conditions for melting but does not show how much has already become liquid. To tell the samples apart, measure the melted mass or the energy transferred during the transition. A larger amount of ice requires more energy to reach the same melted fraction. The fraction reaches one only at the end of the transition.

::grafico{linee="0,0 33.4,100;0,0 66.8,100" punti="16.7,50,pieno;16.7,25,pieno" segmenti="16.7,0,16.7,50" etichette="19,45,50%;19,18,25%" xmin=0 xmax=72 ymin=0 ymax=112 nomi="Q (kJ),Melted (%)" titolo="Equal energy inputs melt equal masses. The melted percentage is higher for the 0.100 kg sample."}
:::

## Transitions between the phases

:::definizione{#transizioni titolo="Names of the transitions"}
Melting changes a solid into a liquid, and freezing is its reverse. Vaporisation changes a liquid into a gas and condensation changes a gas into a liquid. A direct change from solid to gas is sublimation. Deposition is the reverse process. These direct changes can be seen, for instance, as dry ice disappears and as frost forms.
:::

:::osservazione{titolo="Heat sign for the sample"}
Identify the sign before substituting values. Here $Q$ is positive when heat enters the sample and negative when it leaves. The table applies to transitions at the equilibrium temperature and pressure, with $L>0$.

| Initial and final phases | Transition | Sign of $Q$ |
| --- | --- | ---: |
| Solid → liquid | Melting | $+$ |
| Liquid → solid | Freezing | $-$ |
| Liquid → gas | Vaporisation | $+$ |
| Gas → liquid | Condensation | $-$ |
| Solid → gas | Sublimation | $+$ |
| Gas → solid | Deposition | $-$ |

Taking the receiving surroundings as the system reverses the sign compared with the sample. For a forward and a reverse transition involving the same mass under the same conditions, the heat transfers have the same magnitude. Their durations may differ if the powers differ.
:::

:::esempio{#ciclo titolo="Melting and freezing at different powers"}
A $0.10\,\mathrm{kg}$ sample of water starts as ice at zero. With $L_f=334\,\mathrm{kJ/kg}$, it absorbs $33.4\,\mathrm{kJ}$ to melt. At a useful power of $334\,\mathrm W$, melting takes $100\,\mathrm s$. A refrigerator then extracts $167\,\mathrm W$ from it. Freezing releases the same $33.4\,\mathrm{kJ}$ again, taking $200\,\mathrm s$ at this power.

The graph accumulates heat input with positive sign and heat output with negative sign. At the end the algebraic total is zero. The energy transferred in each interval has magnitude $33.4\,\mathrm{kJ}$, as shown by the change in the vertical coordinate over each section.

::grafico{linee="0,0 100,33.4 300,0" punti="100,33.4,pieno;300,0,pieno" xmin=0 xmax=320 ymin=0 ymax=40 nomi="t (s),Q (kJ)" titolo="Over 100 s, 33.4 kJ enters. Over the following 200 s, the same energy leaves the sample."}
:::

## Latent heat

:::teorema{#latente titolo="Energy needed for a phase change"}
Let $m_{\mathrm{tr}}$ be the mass changing phase at the transition temperature and $L$ the corresponding **specific latent heat**, in $\mathrm{J/kg}$. The complete conversion of one kilogram requires $L$ joules in magnitude. At fixed transition pressure and temperature, heat transfer is proportional to the mass converted.

$$
|Q|=m_{\mathrm{tr}}L.
$$

In the sample balance, melting and vaporisation have $Q>0$, while freezing and condensation have $Q<0$. The value of $L$ is positive. At atmospheric pressure, use $L_f=334\,000\,\mathrm{J/kg}$ and $L_v=2.26\cdot10^6\,\mathrm{J/kg}$ for water.
:::

:::esempio{titolo="Using the mass actually converted"}
Supply $20.04\,\mathrm{kJ}$ to $0.10\,\mathrm{kg}$ of ice at its melting point. The mass melted is $\dfrac{20040}{334000}\,\mathrm{kg}=0.060\,\mathrm{kg}$. There is $0.040\,\mathrm{kg}$ of ice left. Melting it all would take $33.4\,\mathrm{kJ}$, so the mixed system stays at the melting point.

::grafico{linee="0,0 33.4,100 41,100" punti="20.04,60,pieno;33.4,100,pieno" etichette="18,67,60 g;34,105,100 g" xmin=0 xmax=43 ymin=0 ymax=120 nomi="Q (kJ),m (g)" titolo="The melted mass grows until all the available ice has melted."}
:::

:::esempio{#calibrazione-latente titolo="Finding latent heat from an interval"}
A calorimeter displays the energy supplied since the start. The heating graph for $0.10\,\mathrm{kg}$ of a pure substance held at constant pressure enters melting when the display shows $4.5\,\mathrm{kJ}$ and completes it at a reading of $29.5\,\mathrm{kJ}$. The energy for the transition is the difference between the two readings. The first $4.5\,\mathrm{kJ}$ warms the solid.

$$
Q_{\mathrm{fus}}=(29.5-4.5)\,\mathrm{kJ}=25\,\mathrm{kJ},
\qquad
L_f=\frac{25\,\mathrm{kJ}}{0.10\,\mathrm{kg}}=250\,\mathrm{kJ/kg}.
$$

Using the thermometer’s vertical reading would give a temperature change instead of an amount of energy for the transition. Using the final calorimeter reading alone would also include the heating of the solid. The calculation assumes that the readings measure energy transferred to the sample. If some energy heats the apparatus, correct the readings before subtracting them.

Repeat the experiment with twice the mass at the same pressure. If the energy readings are correct, the difference between the readings at the start and end of melting doubles. A constant, nonzero offset added to every reading in both trials cancels in the subtraction. Heat lost during the measurement requires a separate correction.
:::

## Heating curves

:::osservazione{#curva titolo="Sloped sections and plateaus"}
In a graph of temperature versus absorbed energy, a single-phase section has slope $\dfrac{1}{mc}$ when $m$ and $c$ are constant. During a phase change at its equilibrium temperature the section is horizontal. The plateau’s width along the energy axis is $mL$ for complete conversion. If the horizontal axis measures time instead and useful power is constant, use $Q=P t$.
:::

:::esempio{titolo="From ice at minus ten degrees to lukewarm water"}
For $0.20\,\mathrm{kg}$ of ice at $-10\,{}^\circ\mathrm C$, reaching zero takes $0.20\cdot2100\cdot10=4200$ joules. It then takes $66\,800$ joules to melt the ice. At that point the horizontal coordinate is $71\,000$ joules. Bringing the water to $20\,{}^\circ\mathrm C$ adds $0.20\cdot4200\cdot20=16\,800$ joules.

::grafico{linee="0,-10 4.2,0 71,0 87.8,20" punti="4.2,0,pieno;71,0,pieno;87.8,20,pieno" xmin=0 xmax=93 ymin=-12 ymax=24 nomi="Q (kJ),T (°C)" titolo="The plateau extends from 4.2 to 71 kJ. The change of slope distinguishes ice from liquid water."}
:::

:::esempio{#raffreddamento titolo="Cooling and freezing a sample"}
Start with $0.20\,\mathrm{kg}$ of water at $20\,{}^\circ\mathrm C$ and reverse the steps in the heating example. With the same values of $c_g$, $c_a$ and $L_f$, first extract $16.8\,\mathrm{kJ}$ to reach zero and then $66.8\,\mathrm{kJ}$ to freeze the water. At the far end of the plateau, the cumulative energy extracted is $83.6\,\mathrm{kJ}$. To reach ice at $-10\,{}^\circ\mathrm C$, extract another $4.2\,\mathrm{kJ}$, giving a total of $87.8\,\mathrm{kJ}$.

The horizontal axis records extracted energy as a positive quantity. In the sample balance, heat transfer is negative over all three sections. With $40\,\mathrm{kJ}$ extracted, the graph is on the plateau. Of this total, only $23.2\,\mathrm{kJ}$ was extracted during freezing. The graph shows both the temperature and the contribution associated with the phase change.

::grafico{linee="0,20 16.8,0 83.6,0 87.8,-10" punti="16.8,0,pieno;40,0,pieno;83.6,0,pieno;87.8,-10,pieno" segmenti="40,-12,40,0" xmin=0 xmax=94 ymin=-12 ymax=24 nomi="E (kJ),T (°C)" titolo="E is the extracted energy. At 40 kJ the temperature is still zero and water and ice coexist."}
:::

## Heating in several stages

:::teorema{#fasi titolo="Adding the energy contributions"}
Select a thermal model separately for each stage. Starting with ice at $T_i<0\,{}^\circ\mathrm C$ and ending with liquid water at $T_f>0\,{}^\circ\mathrm C$, at the reference pressure we have

$$
Q=m c_g(0-T_i)+mL_f+mc_a(T_f-0).
$$

The first term warms the solid phase, the second changes phase, and the third warms the liquid phase. Within each phase the specific heat capacity is taken to be constant. The complete path requires all three terms. For the reverse path the same contributions change sign.
:::

:::esempio{#durata titolo="Two powers and a threshold"}
It takes $66.8\,\mathrm{kJ}$ to melt $0.20\,\mathrm{kg}$ of ice at zero. A source first delivers useful power of $200\,\mathrm W$ for $100\,\mathrm s$, which is $20\,\mathrm{kJ}$. This leaves $46.8\,\mathrm{kJ}$. If the second power is $400\,\mathrm W$, the remaining melting takes $117\,\mathrm s$, so the total time is $217\,\mathrm s$. The balance now uses two intervals with different powers.

::grafico{linee="0,0 100,20 217,66.8" punti="100,20,pieno;217,66.8,pieno" xmin=0 xmax=235 ymin=0 ymax=72 nomi="t (s),Q (kJ)" titolo="The second slope is twice the first. At 217 s, energy reaches the threshold for complete melting."}
:::

:::esempio{#dispersioni titolo="Distinguishing electrical and useful power"}
A heater draws $275\,\mathrm W$. While $0.10\,\mathrm{kg}$ of ice already at zero melts, $75\,\mathrm W$ is transferred to the surroundings. Take both powers as constant and energy stored by the apparatus as negligible. The sample receives $200\,\mathrm J$ every second. The melting threshold is $33.4\,\mathrm{kJ}$, so melting finishes after $167\,\mathrm s$.

Over that interval the electrical energy is about $45.9\,\mathrm{kJ}$. The difference of about $12.5\,\mathrm{kJ}$ is the energy transferred to the surroundings. Dividing the melting threshold by electrical power would give a shorter time because it would count the energy lost as part of the energy received by the ice. If losses changed between stages, estimate the useful power separately in each interval.

::grafico{f="0.275*x;0.2*x" legenda="\text{Electrical energy};\text{Energy to sample}" punti="167,45.925,pieno;167,33.4,pieno" segmenti="167,0,167,45.925" xmin=0 xmax=190 ymin=0 ymax=55 nomi="t (s),E (kJ)" titolo="At 167 s the useful energy curve reaches 33.4 kJ. Electrical energy use is greater."}
:::

:::esempio{#recipiente titolo="Heat absorbed by the vessel"}
A calorimeter starts at $0\,{}^\circ\mathrm C$ and holds $0.10\,\mathrm{kg}$ of ice at the same temperature. After supplying $43800\,\mathrm J$, only liquid water at $20\,{}^\circ\mathrm C$ is present and the vessel is at the same temperature. Neglect heat losses and any other transfers. With $L_f=334000\,\mathrm{J/kg}$ and $c_a=4200\,\mathrm{J/(kg\,K)}$, the energy absorbed by the vessel can be found.

The ice needs $33400\,\mathrm J$ to melt. The resulting water then takes $8400\,\mathrm J$ to warm. The balance leaves $2000\,\mathrm J$ for the vessel. Its heat capacity is therefore $\dfrac{2000\,\mathrm J}{20\,\mathrm K}=100\,\mathrm{J/K}$. This capacity belongs to the entire vessel, while $c_a$ applies to a kilogram of water. If an unknown amount of heat escaped to the surroundings, the $2000\,\mathrm J$ would include that loss and the reading alone would not give the vessel’s heat capacity.
:::

## Ice in water

:::osservazione{#miscela titolo="Deciding whether all the ice melts"}
In an insulated vessel of negligible heat capacity, combine water at $T_a>0\,{}^\circ\mathrm C$ with ice at $0\,{}^\circ\mathrm C$. The maximum heat the water can release by cooling to zero is $Q_{\mathrm{disp}}=m_a c_a (T_a-0)$. The heat needed to melt all the ice is $Q_{\mathrm{fus}}=m_gL_f$. The comparison determines which balance to use.

- If $Q_{\mathrm{disp}}<Q_{\mathrm{fus}}$, $\dfrac{Q_{\mathrm{disp}}}{L_f}$ kilograms melt and both phases remain at $0\,{}^\circ\mathrm C$.
- If $Q_{\mathrm{disp}}=Q_{\mathrm{fus}}$, the last ice melts and we obtain water at $0\,{}^\circ\mathrm C$.
- If $Q_{\mathrm{disp}}>Q_{\mathrm{fus}}$, the remaining energy warms all the water. The mass after melting includes the melted ice.
:::

:::esempio{titolo="Compare thresholds before calculating"}
Mix $0.4\,\mathrm{kg}$ of water at $20\,{}^\circ\mathrm C$ and $0.2\,\mathrm{kg}$ of ice at zero. The first value is $33\,600\,\mathrm J$ and the second $66\,800\,\mathrm J$. While ice remains the final temperature is zero. The amount melted is $\dfrac{33\,600\,\mathrm J}{L_f}\simeq0.101\,\mathrm{kg}$ and about $0.099\,\mathrm{kg}$ of ice remains.

::grafico{f="1.68*x;66.8" punti="20,33.6,pieno;39.7619,66.8,pieno" xmin=0 xmax=48 ymin=0 ymax=85 nomi="T_i (°C),Q (kJ)" legenda="\mathrm{available};\mathrm{threshold}" titolo="The stated initial temperature lies before the intersection."}
:::

:::esempio{#miscela-completa titolo="Energy balance after complete melting"}
In an insulated vessel of negligible heat capacity, mix $0.50\,\mathrm{kg}$ of water at $30\,{}^\circ\mathrm C$ with $0.10\,\mathrm{kg}$ of ice at zero. With $c_a=4200\,\mathrm{J/(kg\,K)}$, the water could release $63\,\mathrm{kJ}$ before reaching zero. Melting all the ice takes $33.4\,\mathrm{kJ}$, leaving $29.6\,\mathrm{kJ}$ to warm the now liquid mass.

$$
T_f=\frac{29.6\cdot1000}{(0.50+0.10)\cdot4200}\,{}^\circ\mathrm C
  \simeq 11.7\,{}^\circ\mathrm C.
$$

Dividing by just the initial water mass would give too high a final temperature. The freshly melted ice also warms up. The boundary is reached when the water can release exactly $33.4\,\mathrm{kJ}$, which is at an initial temperature of about $15.9\,{}^\circ\mathrm C$. Before that threshold, water and ice coexist. Above it, a rise in initial temperature leads to a rise in final temperature.

::grafico{linee="0,0 15.9048,0 44,23.4127" punti="15.9048,0,pieno;30,11.746,pieno" xmin=0 xmax=47 ymin=-3 ymax=26 nomi="Initial T (°C),Final T (°C)" titolo="For the stated masses the threshold is about 15.9 °C initially. Above it all the ice melts."}
:::

:::osservazione{#ghiaccio-freddo titolo="When the ice starts below zero"}
If the ice starts below zero, some of the water’s energy is needed to warm the solid before it can melt. Comparing the available heat with just $m_gL_f$ would overestimate melting. First check whether the water can bring the solid to the equilibrium temperature without any of the water freezing.

For example, $0.20\,\mathrm{kg}$ of water at $4\,{}^\circ\mathrm C$ releases $3.36\,\mathrm{kJ}$ on cooling to zero. Warming $0.30\,\mathrm{kg}$ of ice from $-10$ to $0\,{}^\circ\mathrm C$ takes $6.30\,\mathrm{kJ}$ with $c_g=2100\,\mathrm{J/(kg\,K)}$. The shortfall is $2.94\,\mathrm{kJ}$. This can come from freezing about $0.0088\,\mathrm{kg}$ of the initial water. There is enough water for this, so both phases are still present at the melting temperature in equilibrium.
:::

## Evaporation, boiling and pressure

:::definizione{#pressione titolo="Conditions for a phase change"}
In **evaporation**, some molecules leave the free surface of a liquid even below its boiling point. In **boiling**, vapour bubbles form throughout the liquid. The boiling point depends on pressure. Water boils near $100\,{}^\circ\mathrm C$ at normal atmospheric pressure. When the external pressure is lower, the boiling temperature is lower.
:::

:::attenzione{titolo="Interpreting a flat section"}
An experimental curve can have a nearly flat section when a thermostat holds the temperature or losses balance the input. To attribute it to melting or boiling, check that two phases coexist at the stated pressure. Impurities and changing pressure can make the section less flat than in the ideal model.
:::

:::osservazione{#saturazione titolo="Vapour pressure and the onset of boiling"}
Water in a closed vessel can reach equilibrium between its liquid surface and the vapour above it. At a fixed temperature, the partial pressure of the vapour at that equilibrium is the **saturation vapour pressure**. It rises with temperature. To predict when boiling starts, neglect small pressure differences within the liquid and effects associated with forming the first bubbles, and compare that value with the external pressure.

For water, at $90\,{}^\circ\mathrm C$ the saturation vapour pressure is about $70\,\mathrm{kPa}$, while at $100\,{}^\circ\mathrm C$ it is about $101\,\mathrm{kPa}$. In a vessel at $70\,\mathrm{kPa}$, boiling thus begins near $90\,{}^\circ\mathrm C$. If the pressure changes during the experiment, determine the new transition temperature. The energy already supplied to the liquid does not by itself determine the boiling temperature.

::grafico{linee="80,47 90,70 100,101" punti="90,70,pieno;100,101,pieno" segmenti="80,70,90,70;90,44,90,70;80,101,100,101" xmin=80 xmax=103 ymin=44 ymax=112 nomi="T (°C),p sat. (kPa)" titolo="Approximate saturation vapour pressures of water. The dashed lines indicate two possible external pressures."}
:::

:::esempio{#condensa-liquido titolo="From saturated vapour to warm liquid water"}
At normal atmospheric pressure, cool $0.020\,\mathrm{kg}$ of saturated vapour at $100\,{}^\circ\mathrm C$ to liquid water at $75\,{}^\circ\mathrm C$. Condensation releases $0.020\cdot2260\,\mathrm{kJ}=45.2\,\mathrm{kJ}$. As the liquid subsequently cools, it releases $0.020\cdot4200\cdot25\,\mathrm J=2.1\,\mathrm{kJ}$. A total of $47.3\,\mathrm{kJ}$ is transferred to the surroundings.

The first $45.2\,\mathrm{kJ}$ is transferred at constant temperature while the vapour mass decreases. The temperature falls below $100\,{}^\circ\mathrm C$ once condensation is complete in this constant-pressure model. If less energy than the complete condensation requirement were extracted, some vapour would remain at the end.

::grafico{linee="0,100 45.2,100 47.3,75" punti="45.2,100,pieno;47.3,75,pieno" xmin=0 xmax=51 ymin=69 ymax=106 nomi="E (kJ),T (°C)" titolo="E measures extracted energy. Temperature falls after all the vapour has condensed."}
:::
