---
titolo: "Changes of phase"
sommario: "Latent heat, heating curves, and balances with melting, vaporisation or condensation."
---

## States of matter

:::definizione{#stati titolo="Solid, liquid and gas"}
A **phase** is a part of a system with uniform physical properties. Ice and liquid water are two phases of the same substance. In a solid, particles oscillate without continually exchanging positions. In a liquid they can move past one another. In a gas they are further apart and the sample fills the available volume.
:::

:::osservazione{#coexist titolo="Coexistence and fixed pressure"}
A pure substance can have two phases in equilibrium at the transition temperature for the applied pressure. For example, at normal atmospheric pressure liquid water and ice can coexist near $0\,{}^\circ\mathrm C$. If energy enters and the liquid fraction increases, temperature stays approximately fixed while both phases remain. A different pressure must be used in the description when the external conditions change.
:::

## Transitions between the phases

:::definizione{#transizioni titolo="Names of the transitions"}
Melting changes a solid into a liquid, and freezing is its reverse. Vaporisation changes a liquid into a gas and condensation changes a gas into a liquid. A direct change from solid to gas is sublimation. Deposition is the reverse process. These direct changes can be seen, for instance, as dry ice disappears and as frost forms.
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

::grafico{linee="0,0 33.4,0.1 41,0.1" punti="20.04,0.06,pieno;33.4,0.1,pieno" xmin=0 xmax=43 ymin=0 ymax=0.12 nomi="Q (kJ),m (kg)" titolo="The melted mass grows until all the available ice has melted."}
:::

## Heating curves

:::osservazione{#curva titolo="Sloped sections and plateaus"}
In a graph of temperature versus absorbed energy, a single-phase section has slope $1/(mc)$ when $m$ and $c$ are constant. During a phase change at its equilibrium temperature the section is horizontal. The plateau’s width along the energy axis is $mL$ for complete conversion. If the horizontal axis measures time instead and useful power is constant, replace $Q$ with $P t$.
:::

:::esempio{titolo="From ice at minus ten degrees to lukewarm water"}
For $0.20\,\mathrm{kg}$ of ice at $-10\,{}^\circ\mathrm C$, reaching zero takes $0.20\cdot2100\cdot10=4200$ joules. It then takes $66\,800$ joules to melt the ice. At that point the horizontal coordinate is $71\,000$ joules. Bringing the water to $20\,{}^\circ\mathrm C$ adds $0.20\cdot4200\cdot20=16\,800$ joules.

::grafico{linee="0,-10 4.2,0 71,0 87.8,20" punti="4.2,0,pieno;71,0,pieno;87.8,20,pieno" xmin=0 xmax=93 ymin=-13 ymax=25 nomi="Q (kJ),T (°C)" titolo="The plateau extends from 4.2 to 71 kJ. The change of slope distinguishes ice from liquid water."}
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
Melting $0.20\,\mathrm{kg}$ of ice at zero takes $66.8\,\mathrm{kJ}$. A source first delivers useful power of $200\,\mathrm W$ for $100\,\mathrm s$, which is $20\,\mathrm{kJ}$. This leaves $46.8\,\mathrm{kJ}$. If the second power is $400\,\mathrm W$, the remaining melting takes $117\,\mathrm s$, so the total time is $217\,\mathrm s$. The balance now uses two intervals with different powers.

::grafico{linee="0,0 100,20 217,66.8" punti="100,20,pieno;217,66.8,pieno" xmin=0 xmax=235 ymin=0 ymax=72 nomi="t (s),Q (kJ)" titolo="The second slope is twice the first. At 217 s, energy reaches the threshold for complete melting."}
:::

## Ice in water

:::osservazione{#miscela titolo="Deciding whether all the ice melts"}
In an insulated vessel of negligible heat capacity, combine water at $T_a>0\,{}^\circ\mathrm C$ with ice at $0\,{}^\circ\mathrm C$. The maximum heat the water can release by cooling to zero is $Q_{\mathrm{avail}}=m_a c_a(T_a-0)$. The threshold for melting all the ice is $Q_{\mathrm{melt}}=m_gL_f$. The comparison determines which balance to use.

- If $Q_{\mathrm{avail}}<Q_{\mathrm{melt}}$, $Q_{\mathrm{avail}}/L_f$ kilograms melt and both phases remain at zero.
- If $Q_{\mathrm{avail}}=Q_{\mathrm{melt}}$, the last ice melts and we obtain water at zero.
- If $Q_{\mathrm{avail}}>Q_{\mathrm{melt}}$, the remaining energy warms all the water. The mass after melting includes the melted ice.
:::

:::esempio{titolo="Compare thresholds before calculating"}
Mix $0.4\,\mathrm{kg}$ of water at $20\,{}^\circ\mathrm C$ and $0.2\,\mathrm{kg}$ of ice at zero. The first value is $33\,600\,\mathrm J$ and the second $66\,800\,\mathrm J$. While ice remains the final temperature is zero. The amount melted is $33\,600\,\mathrm J/L_f\simeq0.101\,\mathrm{kg}$ and about $0.099\,\mathrm{kg}$ of ice remains.

::grafico{f="1.68*x;66.8" punti="20,33.6,pieno;39.7619,66.8,pieno" xmin=0 xmax=48 ymin=0 ymax=85 nomi="T_i (°C),Q (kJ)" legenda="\mathrm{available};\mathrm{threshold}" titolo="The stated initial temperature lies before the intersection."}
:::

## Evaporation, boiling and pressure

:::definizione{#pressione titolo="Conditions for a phase change"}
In **evaporation**, some molecules leave the free surface of a liquid even below its boiling point. In **boiling**, vapour bubbles form throughout the liquid. The boiling point depends on pressure. Water boils near $100\,{}^\circ\mathrm C$ at normal atmospheric pressure. When the external pressure is lower, the boiling temperature is lower.
:::

:::attenzione{titolo="Interpreting a flat section"}
An experimental curve can have a nearly flat section when a thermostat holds the temperature or losses balance the input. To attribute it to melting or boiling, check that two phases coexist at the stated pressure. Impurities and changing pressure can make the section less flat than in the ideal model.
:::
