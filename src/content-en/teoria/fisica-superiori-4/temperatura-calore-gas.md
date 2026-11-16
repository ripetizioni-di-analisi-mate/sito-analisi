---
titolo: Temperature, heat, and ideal gases
sommario: Thermal equilibrium, expansion, energy balances with and without phase changes, heat transfer, and the ideal gas laws.
---

## Temperature and thermal equilibrium

:::definizione{#temperatura titolo="Temperature and thermal equilibrium"}
Two bodies are in **thermal equilibrium** if they stay at the same temperature when brought into contact through a wall that allows heat to pass. The zeroth law of thermodynamics states that if two bodies are each in thermal equilibrium with a third, they are in thermal equilibrium with each other. A thermometer measures the temperature of a body after coming into equilibrium with it. The measurement accurately represents the body's initial state if the thermometer absorbs or releases a negligible amount of energy.

Let $t$ be the numerical value of the temperature in degrees Celsius and let $T$ be its value in kelvin. The two scales have increments of the same size, so
$$
T=t+273.15,
\qquad
T_2-T_1=t_2-t_1
$$
as equalities between numerical values. For example, $20\,{}^\circ\mathrm C$ corresponds to $293.15\,\mathrm K$, and a rise of $20\,{}^\circ\mathrm C$ corresponds to a rise of $20\,\mathrm K$. At standard atmospheric pressure, pure water melts at about $0\,{}^\circ\mathrm C$ and boils at about $100\,{}^\circ\mathrm C$.
:::

:::attenzione
Ratios of temperatures in the gas laws use kelvin. If an ideal gas in a sealed rigid container goes from $20$ to $40\,{}^\circ\mathrm C$, the ratio of final to initial pressure is
$$
\frac{p_2}{p_1}=\frac{313.15}{293.15}\simeq1.068.
$$
The pressure rises by about $6.8\%$. The ratio $\dfrac{40}{20}$ would give a doubling because it uses a scale whose zero does not correspond to absolute zero.
:::

:::esempio{titolo="Conversions between the scales"}
The temperature of the human body, $37\,{}^\circ\mathrm C$, corresponds to $T=37+273.15=310.15\,\mathrm K$. Liquid nitrogen boils at $77\,\mathrm K$, that is, at $t=77-273.15=-196.15\,{}^\circ\mathrm C$. Absolute zero, $T=0\,\mathrm K$, corresponds to $-273.15\,{}^\circ\mathrm C$.
:::

## Thermal expansion

:::teorema{#dilatazione titolo="Linear and volumetric expansion"}
Let $L_0$ be the initial length of an unconstrained rod, and let $\Delta T$ be the change in temperature, uniform along the rod. The **coefficient of linear expansion** $\alpha$, measured in $\mathrm{K^{-1}}$, is the fractional change in length per kelvin. If $\alpha$ is approximately constant over the temperature interval and $|\alpha\Delta T|$ is small compared with $1$, the approximations are
$$
\Delta L=\alpha L_0\Delta T,
\qquad L=L_0(1+\alpha\Delta T).
$$
For $\alpha>0$, the sign of $\Delta L$ is the same as that of $\Delta T$. The model describes a rod that is free to lengthen or shorten. If its ends are fixed, the constraint prevents free expansion and can produce stresses in the rod.

For a change in volume, $\Delta V=\beta V_0\Delta T$, where $\beta$ is the coefficient of volumetric expansion. In an isotropic solid, all three dimensions change by the same factor. A cube of side length $L_0$ therefore goes from volume $L_0^3$ to volume $L_0^3(1+\alpha\Delta T)^3$. Expanding the cube gives
$$
\frac{\Delta V}{V_0}
=3\alpha\Delta T+3(\alpha\Delta T)^2+(\alpha\Delta T)^3
\simeq3\alpha\Delta T.
$$
The last two terms are negligible in the linear model, so $\beta\simeq3\alpha$. A liquid has its own volumetric expansion coefficient. Between $0$ and $4\,{}^\circ\mathrm C$, the volume of water decreases as its temperature rises.
:::

:::esempio{titolo="Expansion and the slope of the graph"}
A $2.0\,\mathrm m$ steel rod has $\alpha=1.2\cdot10^{-5}\,\mathrm{K^{-1}}$. When the temperature rises by $50\,\mathrm K$, the rod lengthens by
$$
\Delta L=(1.2\cdot10^{-5})\cdot2.0\cdot50\,\mathrm m
=1.2\cdot10^{-3}\,\mathrm m
=1.2\,\mathrm{mm}.
$$
The slope $\alpha L_0$ of the line gives the increase in length per kelvin. A rod of the same material twice as long would give twice the slope.

::grafico{f="0.024*x" punti="50,1.2,pieno" xmin=-7 xmax=63 ymin=-0.2 ymax=2 nomi="ΔT,ΔL (mm)" titolo="For this rod, the slope is 0.024 mm per kelvin"}
:::

:::esempio{titolo="Expansion joints of a rail"}
A steel rail $12\,\mathrm m$ long goes from $-5\,{}^\circ\mathrm C$ to $35\,{}^\circ\mathrm C$, so $\Delta T=40\,\mathrm K$. With $\alpha=1.2\cdot10^{-5}\,\mathrm{K^{-1}}$,
$$
\Delta L=(1.2\cdot10^{-5})\cdot12\cdot40\,\mathrm m=5.76\cdot10^{-3}\,\mathrm m.
$$
The gap between two consecutive rails must therefore be at least $5.76\,\mathrm{mm}$ so that the ends do not touch during heating.
:::

:::osservazione
A cavity in a plate expands as if it were made of the same material as the plate. For a circular hole of diameter $d_0=20.0\,\mathrm{mm}$ in an aluminum plate, with $\alpha=2.4\cdot10^{-5}\,\mathrm{K^{-1}}$, heated by $100\,\mathrm K$, the diameter increases by
$$
\Delta d=(2.4\cdot10^{-5})\cdot20.0\cdot100\,\mathrm{mm}=0.048\,\mathrm{mm}.
$$
Every segment drawn on the plate, including the diameter of the hole, changes by the same factor $\alpha\Delta T$, so the hole enlarges together with the plate.
:::

:::attenzione
The relative change in volume is three times the relative change in length. With $\alpha\Delta T=4.8\cdot10^{-4}$, the length of a rod increases in proportion $4.8\cdot10^{-4}$, whereas a block of the same material with volume $1000\,\mathrm{cm^3}$ increases in proportion $3\cdot4.8\cdot10^{-4}=1.44\cdot10^{-3}$, that is, by $1.44\,\mathrm{cm^3}$. Using $\alpha$ in place of $\beta=3\alpha$ would give $0.48\,\mathrm{cm^3}$, one third of the correct value.
:::

## Heat and heat capacity

:::definizione{#calorimetria titolo="Specific heat capacity and heat capacity"}
**Heat** is energy transferred because of a temperature difference, and it is measured in joules. Heat absorbed by a body is positive, and heat released by it is negative. Internal energy, unlike heat, is a property of the body's state.

For a substance of mass $m$ that stays in the same phase, with an approximately constant specific heat capacity $c$ and under the conditions for which that value of $c$ applies,
$$
Q=mc(T_f-T_i),\qquad C=mc.
$$
The **specific heat capacity** $c$ is the energy required to raise the temperature of one kilogram of the substance by one kelvin under those conditions. The **heat capacity** $C$ refers to the whole body. The corresponding units are $\mathrm{J/(kg\,K)}$ and $\mathrm{J/K}$. For equal amounts of heat absorbed, $\Delta T=\dfrac QC$ shows that the body with lower heat capacity warms by a greater amount.
:::

:::esempio{titolo="Energy absorbed and heating time"}
A $0.50\,\mathrm{kg}$ sample of water is heated by $10\,\mathrm K$, with $c=4180\,\mathrm{J/(kg\,K)}$. It requires $Q=0.50\cdot4180\cdot10\,\mathrm J=20\,900\,\mathrm J$. If the water receives energy at a constant rate of $1000\,\mathrm{J/s}$, the time required is
$$
\Delta t=\frac QP=\frac{20\,900}{1000}\,\mathrm s=20.9\,\mathrm s.
$$
The power used is the power delivered to the water.
:::

:::teorema{#equilibrio-calorimetrico titolo="Calorimetric balance"}
Let $C_h$ and $C_c$ be the heat capacities of two bodies, and let $t_h>t_c$ be their initial temperatures. If the system is isolated, exchanges are limited to heat, and neither body changes phase, the energy released by the warmer body is absorbed by the cooler body. At their common final temperature $t_f$,
$$
C_h(t_f-t_h)+C_c(t_f-t_c)=0.
$$
Collecting the terms in $t_f$ gives
$$
t_f=\frac{C_ht_h+C_ct_c}{C_h+C_c}.
$$
This is a weighted mean with positive weights, so $t_c<t_f<t_h$.

If the container has appreciable heat capacity $C_r$ and is initially at $t_r$, add $C_r(t_f-t_r)$ to the balance. The final temperature moves toward $t_r$ relative to the value calculated without the container because the weighted mean now includes the weight $C_r$.
:::

:::esempio{titolo="Same energy, different substances"}
A quantity of $10\,\mathrm{kJ}$ is supplied to $1.0\,\mathrm{kg}$ of water and to $1.0\,\mathrm{kg}$ of copper, with $c_{\mathrm{rame}}=385\,\mathrm{J/(kg\,K)}$. From $\Delta T=\dfrac{Q}{mc}$,
$$
\Delta T_{\mathrm{acqua}}=\frac{10\,000}{1.0\cdot4180}\,\mathrm K\simeq2.4\,\mathrm K,
\qquad
\Delta T_{\mathrm{rame}}=\frac{10\,000}{1.0\cdot385}\,\mathrm K\simeq26.0\,\mathrm K.
$$
For equal mass and equal energy absorbed, the temperature rise of copper is about eleven times that of water, because its specific heat capacity is about eleven times smaller.
:::

:::attenzione
The final temperature of a mixture equals the arithmetic mean of the initial temperatures only if the two heat capacities are equal. If $0.20\,\mathrm{kg}$ of water at $60\,{}^\circ\mathrm C$ is mixed with $0.30\,\mathrm{kg}$ at $20\,{}^\circ\mathrm C$, the specific heat capacity is the same and cancels. The balance gives $t_f=\dfrac{0.20\cdot60+0.30\cdot20}{0.20+0.30}\,{}^\circ\mathrm C=36\,{}^\circ\mathrm C$, whereas the arithmetic mean would give $40\,{}^\circ\mathrm C$. The cold mass is larger and weighs more in the mean.
:::

:::esempio{titolo="Final temperature as the cold mass varies"}
$0.20\,\mathrm{kg}$ of water at $60\,{}^\circ\mathrm C$ is poured into a mass $x$ of water at $20\,{}^\circ\mathrm C$, with $x$ expressed in kilograms. The calorimetric balance gives
$$
t_f(x)=\frac{0.20\cdot60+20\,x}{0.20+x}\,{}^\circ\mathrm C.
$$
For $x=1.0$ the result is $\dfrac{32}{1.2}\,{}^\circ\mathrm C\simeq26.7\,{}^\circ\mathrm C$. As $x$ increases, the final temperature decreases and approaches $20\,{}^\circ\mathrm C$ without reaching it, because the cold mass becomes much larger than the hot one. As $x$ tends to zero, it tends to $60\,{}^\circ\mathrm C$.

::grafico{f="(12+20*x)/(0.2+x)" punti="0.3,36,pieno,36 °C" xmin=0 xmax=2 ymin=10 ymax=60 nomi="x,t" titolo="Final temperature $t_f$ in degrees Celsius as a function of the mass $x$ in kilograms of water at $20\,{}^\circ\mathrm C$"}
:::

## Phase changes

:::definizione{#calore-latente titolo="Latent heat and heating curves"}
At the equilibrium pressure a pure substance melts at a fixed temperature. While solid and liquid coexist, the energy absorbed turns some of the solid into liquid. The **specific latent heat of fusion** $\ell_f$ is the energy per unit mass transformed, so $Q=m_{\mathrm{fusa}}\ell_f$. When the same mass freezes, the magnitude of the heat released is the same. The relation applies during the phase change. Intervals in which a single phase warms are calculated separately using $Q=mc\Delta T$.

To turn $0.10\,\mathrm{kg}$ of ice at $0\,{}^\circ\mathrm C$ into water at $20\,{}^\circ\mathrm C$ requires
$$
\begin{aligned}
Q_{\mathrm{fus}}&=0.10\cdot334\,000\,\mathrm J=33\,400\,\mathrm J,\\
Q_{\mathrm{liq}}&=0.10\cdot4180\cdot20\,\mathrm J=8360\,\mathrm J,\\
Q&=41\,760\,\mathrm J.
\end{aligned}
$$
Latent heat also occurs during boiling and condensation. Evaporation from the surface, by contrast, can occur below the boiling temperature.
:::

:::esempio{titolo="Heating ice, melting it, and warming the water"}
For $1\,\mathrm{kg}$ of ice initially at $-20\,{}^\circ\mathrm C$, with $c_s=2100\,\mathrm{J/(kg\,K)}$, the ice reaches $0\,{}^\circ\mathrm C$ after receiving $42\,\mathrm{kJ}$. Melting all the ice takes another $334\,\mathrm{kJ}$, so the horizontal segment ends when the total heat reaches $376\,\mathrm{kJ}$. After melting, the slope is $\dfrac{1}{mc}$, where $c=4180\,\mathrm{J/(kg\,K)}$. Reaching $20\,{}^\circ\mathrm C$ takes another $83.6\,\mathrm{kJ}$.

::grafico{linee="0,-20 42,0 376,0 459.6,20" punti="42,0,pieno,42 kJ;376,0,pieno,376 kJ" xmin=0 xmax=500 ymin=-25 ymax=25 nomi="Q,t (°C)" titolo="Melting occurs between 42 kJ and 376 kJ at 0 °C"}
:::

:::esempio{titolo="Partial melting in an insulated container"}
Mix $0.20\,\mathrm{kg}$ of ice at $0\,{}^\circ\mathrm C$ with $0.30\,\mathrm{kg}$ of water at $40\,{}^\circ\mathrm C$. The container is insulated and its heat capacity is negligible. Before writing the balance, compare the heat the water can release by cooling to $0\,{}^\circ\mathrm C$ with the heat required to melt all the ice:
$$
Q_{\mathrm{disp}}=0.30\cdot4180\cdot40\,\mathrm J=50\,160\,\mathrm J,
\quad
Q_{\mathrm{fus}}=0.20\cdot334\,000\,\mathrm J=66\,800\,\mathrm J.
$$
Since $Q_{\mathrm{disp}}<Q_{\mathrm{fus}}$, both phases remain at $0\,{}^\circ\mathrm C$ in equilibrium. The mass of ice that melts is $\dfrac{Q_{\mathrm{disp}}}{\ell_f}\simeq0.150\,\mathrm{kg}$, so about $0.050\,\mathrm{kg}$ of ice remains.
:::

:::attenzione
During melting the temperature stays constant, so the formula $Q=mc\Delta T$ with $\Delta T=0$ would give zero heat. The heat absorbed by the melting ice is instead $m\ell_f$, which for $0.10\,\mathrm{kg}$ is $33\,400\,\mathrm J$, and it serves to change the phase of the substance.
:::

:::esempio{titolo="Vaporization of water"}
The specific latent heat of vaporization of water at standard atmospheric pressure is $\ell_v=2.26\cdot10^{6}\,\mathrm{J/kg}$. To turn $0.10\,\mathrm{kg}$ of water already at $100\,{}^\circ\mathrm C$ into vapor requires
$$
Q_{\mathrm{vap}}=0.10\cdot2.26\cdot10^6\,\mathrm J=2.26\cdot10^5\,\mathrm J,
$$
whereas warming the same mass from $0$ to $100\,{}^\circ\mathrm C$ requires $0.10\cdot4180\cdot100\,\mathrm J=4.18\cdot10^4\,\mathrm J$. Vaporization therefore requires about $5.4$ times the energy of the heating. In condensation the vapor releases the same energy.
:::

:::richiamo{titolo="Latent heat of fusion and specific heat capacity"}
A mass $m_{\mathrm{fusa}}$ of a pure substance that melts at constant temperature absorbs the heat $Q=m_{\mathrm{fusa}}\ell_f$. A mass $m$ that stays in the same phase and changes temperature by $\Delta T$ exchanges the heat $Q=mc\Delta T$.
:::

::::teorema{#equilibrio-con-ghiaccio titolo="Equilibrium between water and ice"}
In an insulated container of negligible heat capacity, at standard atmospheric pressure, a mass $m_a$ of water at $t_a>0\,{}^\circ\mathrm C$ is mixed with a mass $m_g$ of ice at $0\,{}^\circ\mathrm C$. Let $c$ be the specific heat capacity of water, $Q_{\mathrm{disp}}=m_ac\,t_a$ the heat the water releases in cooling to $0\,{}^\circ\mathrm C$, and $Q_{\mathrm{fus}}=m_g\ell_f$ the heat needed to melt all the ice. Then
$$
\begin{cases}
Q_{\mathrm{disp}}\le Q_{\mathrm{fus}}\ \Rightarrow\ t_f=0\,{}^\circ\mathrm C\ \text{and}\ m_{\mathrm{fusa}}=\dfrac{Q_{\mathrm{disp}}}{\ell_f},\\[10pt]
Q_{\mathrm{disp}}>Q_{\mathrm{fus}}\ \Rightarrow\ t_f=\dfrac{m_ac\,t_a-m_g\ell_f}{(m_a+m_g)\,c}.
\end{cases}
$$
The comparison between $Q_{\mathrm{disp}}$ and $Q_{\mathrm{fus}}$ establishes which of the two cases occurs before the balance is written.

:::dimostrazione
If $Q_{\mathrm{disp}}\le Q_{\mathrm{fus}}$, the water cooling to $0\,{}^\circ\mathrm C$ does not release enough energy to melt all the ice. Water and ice can coexist in equilibrium only at $0\,{}^\circ\mathrm C$, so $t_f=0\,{}^\circ\mathrm C$. All the heat released serves to melt part of the ice, hence $m_{\mathrm{fusa}}\ell_f=Q_{\mathrm{disp}}$ and $m_{\mathrm{fusa}}$ follows.

If $Q_{\mathrm{disp}}>Q_{\mathrm{fus}}$, the ice melts completely and the leftover energy warms the water. When equilibrium is reached, all the water is liquid at the temperature $t_f>0\,{}^\circ\mathrm C$. The initial water releases $m_ac(t_a-t_f)$. The ice absorbs $m_g\ell_f$ to melt and then $m_gc\,t_f$ to bring the resulting water from $0\,{}^\circ\mathrm C$ to $t_f$. Since the container is insulated, the heat released equals the heat absorbed:
$$
\begin{aligned}
m_ac(t_a-t_f)&=m_g\ell_f+m_gc\,t_f\\[6pt]
m_ac\,t_a-m_g\ell_f&=(m_a+m_g)\,c\,t_f\\[6pt]
t_f&=\frac{m_ac\,t_a-m_g\ell_f}{(m_a+m_g)\,c}.
\end{aligned}
$$
The numerator is $Q_{\mathrm{disp}}-Q_{\mathrm{fus}}$ and is positive by hypothesis, so $t_f>0\,{}^\circ\mathrm C$, as required.
:::
::::

:::esempio{titolo="Hot water on a little ice"}
$0.50\,\mathrm{kg}$ of water at $40\,{}^\circ\mathrm C$ is poured onto $0.10\,\mathrm{kg}$ of ice at $0\,{}^\circ\mathrm C$. The heats are $Q_{\mathrm{disp}}=0.50\cdot4180\cdot40\,\mathrm J=83\,600\,\mathrm J$ and $Q_{\mathrm{fus}}=0.10\cdot334\,000\,\mathrm J=33\,400\,\mathrm J$. Since $Q_{\mathrm{disp}}>Q_{\mathrm{fus}}$, the ice melts completely and
$$
t_f=\frac{83\,600-33\,400}{(0.50+0.10)\cdot4180}\,{}^\circ\mathrm C=\frac{50\,200}{2508}\,{}^\circ\mathrm C\simeq20.0\,{}^\circ\mathrm C.
$$
With $0.20\,\mathrm{kg}$ of ice, the final temperature as a function of the mass $x$ of water at $40\,{}^\circ\mathrm C$ is zero as long as the water is not enough to melt the ice, that is, for $x\le\dfrac{66\,800}{167\,200}\,\mathrm{kg}\simeq0.40\,\mathrm{kg}$. For larger $x$ it grows according to the second formula of the theorem.

::grafico{f="max(0,(167200*x-66800)/(4180*(x+0.2)))" punti="0.4,0,pieno,threshold" xmin=0 xmax=2 ymin=-4 ymax=36 nomi="x,t" titolo="Final temperature $t_f$ in degrees Celsius, with $0.20\,\mathrm{kg}$ of ice and a mass $x$ of water at $40\,{}^\circ\mathrm C$"}
:::

## Heat transfer

:::teorema{#trasmissione titolo="Conduction, convection, and radiation"}
In **conduction**, energy travels through matter without bulk movement of matter. Let $\kappa$ be the thermal conductivity of a uniform plane wall of area $A$ and thickness $d$. In steady state, if the temperatures of the two faces are $T_h>T_c$, the rate of heat transfer from the warm side to the cool side is
$$
P=\kappa A\frac{T_h-T_c}{d}.
$$
Steady state implies that the wall does not store energy. If two layers are in perfect contact and lateral losses are negligible, the rate of heat transfer through the first equals the rate through the second. For each layer $\Delta T_i=P\dfrac{d_i}{\kappa_i A}$. Adding the temperature drops gives
$$
P=\frac{T_h-T_c}{\dfrac{d_1}{\kappa_1 A}+\dfrac{d_2}{\kappa_2 A}}.
$$
The term $\dfrac d{\kappa A}$ is the thermal resistance of a layer, measured in $\mathrm{K/W}$. Two identical layers have twice the thermal resistance of a single layer, so they transfer half as much power for the same outside temperatures.

In **convection** the movement of a fluid carries energy. In **radiation**, energy travels as electromagnetic radiation, including through a vacuum. For a gray surface of area $A$ and emissivity $\varepsilon$, surrounded by a large isothermal environment at $T_a$, the net outward power is
$$
P_{\mathrm{net}}=\varepsilon\sigma A(T^4-T_a^4),
\qquad
\sigma=5.67\cdot10^{-8}\,\mathrm{W/(m^2\,K^4)}.
$$
The temperatures are absolute. If the surface is colder than the environment, then $P_{\mathrm{net}}<0$, so more energy enters by radiation than leaves.
:::

:::esempio{titolo="Wall with an insulating layer"}
A brick wall of area $10\,\mathrm{m^2}$, thickness $0.25\,\mathrm m$, and conductivity $0.80\,\mathrm{W/(m\,K)}$ separates a room at $20\,{}^\circ\mathrm C$ from the outside at $0\,{}^\circ\mathrm C$. Its thermal resistance is $R_1=\dfrac{0.25}{0.80\cdot10}\,\mathrm{K/W}=0.03125\,\mathrm{K/W}$, so $P=\dfrac{20}{0.03125}\,\mathrm W=640\,\mathrm W$. An insulating layer of thickness $0.060\,\mathrm m$ and conductivity $0.040\,\mathrm{W/(m\,K)}$ is added, with $R_2=\dfrac{0.060}{0.040\cdot10}\,\mathrm{K/W}=0.15\,\mathrm{K/W}$. Now
$$
P=\frac{20}{0.03125+0.15}\,\mathrm W\simeq110\,\mathrm W.
$$
The power is reduced to about one sixth. The temperature drop across the bricks is $PR_1\simeq3.4\,\mathrm K$, so the interface is at about $16.6\,{}^\circ\mathrm C$ and almost the entire temperature difference lies in the layer with the greater resistance.

::grafico{linee="0,20 25,16.55 31,0" punti="25,16.55,pieno,interface" xmin=-4 xmax=36 ymin=-3 ymax=27 nomi="x,t" titolo="Temperature $t$ in degrees Celsius in the two-layer wall: bricks from $0$ to $25\,\mathrm{cm}$, insulation from $25$ to $31\,\mathrm{cm}$"}
:::

:::richiamo{titolo="Conduction in a plane wall"}
In steady state, through a uniform plane wall of area $A$, thickness $d$, and conductivity $\kappa$, with faces at temperatures $T_h>T_c$, the rate of heat transfer is $P=\kappa A\dfrac{T_h-T_c}{d}=\dfrac{T_h-T_c}{R}$, with $R=\dfrac{d}{\kappa A}$.
:::

::::teorema{#resistenze-parallelo titolo="Side-by-side walls: powers add"}
A wall consists of two side-by-side parts, with thermal resistances $R_1$ and $R_2$, that have the same temperatures $T_h$ and $T_c$ on the outer faces. In steady state and with no heat exchange between the two parts, the total power is
$$
P=(T_h-T_c)\left(\frac{1}{R_1}+\frac{1}{R_2}\right),
$$
that is, the wall has an equivalent resistance $R_{\mathrm{eq}}$ with $\dfrac{1}{R_{\mathrm{eq}}}=\dfrac{1}{R_1}+\dfrac{1}{R_2}$. The equivalent resistance is smaller than the smaller of $R_1$ and $R_2$.

:::dimostrazione
The two parts have the same temperatures on the outer faces, so the same difference $\Delta T=T_h-T_c$. For conduction in each part, $P_1=\dfrac{\Delta T}{R_1}$ and $P_2=\dfrac{\Delta T}{R_2}$. Since there is no lateral exchange, the total power is the sum of the two:
$$
P=P_1+P_2=\Delta T\left(\frac{1}{R_1}+\frac{1}{R_2}\right).
$$
For a single equivalent wall the same power is $P=\dfrac{\Delta T}{R_{\mathrm{eq}}}$. Comparing the two results gives $\dfrac{1}{R_{\mathrm{eq}}}=\dfrac{1}{R_1}+\dfrac{1}{R_2}$. Since $\dfrac{1}{R_{\mathrm{eq}}}>\dfrac{1}{R_1}$ and $\dfrac{1}{R_{\mathrm{eq}}}>\dfrac{1}{R_2}$, it follows that $R_{\mathrm{eq}}<R_1$ and $R_{\mathrm{eq}}<R_2$.
:::
::::

:::esempio{titolo="Wall with a door"}
A wall of total area $10\,\mathrm{m^2}$ consists of a brick part of area $8\,\mathrm{m^2}$, thickness $0.25\,\mathrm m$, and $\kappa=0.80\,\mathrm{W/(m\,K)}$, and a wooden door of area $2\,\mathrm{m^2}$, thickness $0.040\,\mathrm m$, and $\kappa=0.15\,\mathrm{W/(m\,K)}$. The temperature difference between the faces is $20\,\mathrm K$. The resistances are $R_p=\dfrac{0.25}{0.80\cdot8}\,\mathrm{K/W}\simeq0.0391\,\mathrm{K/W}$ and $R_d=\dfrac{0.040}{0.15\cdot2}\,\mathrm{K/W}\simeq0.133\,\mathrm{K/W}$. The powers are $P_p=\dfrac{20}{R_p}=512\,\mathrm W$ and $P_d=\dfrac{20}{R_d}=150\,\mathrm W$, so
$$
P=512\,\mathrm W+150\,\mathrm W=662\,\mathrm W.
$$
The door occupies $20\%$ of the area and transmits about $23\%$ of the total power.
:::

:::esempio{titolo="Power radiated by the skin"}
The skin surface of a person, of area $1.5\,\mathrm{m^2}$ and with $\varepsilon=0.95$, is at $34\,{}^\circ\mathrm C$, that is, $307.15\,\mathrm K$, in a room at $20\,{}^\circ\mathrm C$, that is, $293.15\,\mathrm K$. The net outward power is
$$
P_{\mathrm{net}}=0.95\cdot5.67\cdot10^{-8}\cdot1.5\cdot\left(307.15^4-293.15^4\right)\,\mathrm W\simeq122\,\mathrm W.
$$
The positive sign indicates that the person emits more energy than they absorb from the walls.
:::

:::attenzione
In the radiation formula the temperatures are absolute. For $30\,{}^\circ\mathrm C$ and $10\,{}^\circ\mathrm C$ the term $T^4-T_a^4$ equals $303.15^4-283.15^4\simeq2.0\cdot10^9\,\mathrm K^4$, whereas with the values in degrees Celsius one would find $30^4-10^4=8\cdot10^5\,\mathrm K^4$, about $2500$ times smaller.
:::

## The state of an ideal gas

:::teorema{#gas-ideale titolo="The ideal gas equation of state"}
An **ideal gas** is a model in which particles have negligible volume and move without interacting between elastic collisions. The model approximates many dilute gases far from condensation. In equilibrium,
$$
pV=nRT,
\qquad R=8.314\,\mathrm{J/(mol\,K)}.
$$
Here $p$ is absolute pressure, $V$ is volume, $n$ is the amount of substance in moles, and $T$ is absolute temperature. If the mass is $m$ and the molar mass is $M$, then $n=\dfrac mM$, with consistent mass units. With $R$ expressed in the units given, pascals, cubic meters, and kelvin are used.

If both states contain the same amount of gas, $nR$ is constant and
$$
\frac{p_1V_1}{T_1}=\frac{p_2V_2}{T_2}.
$$
At constant temperature, $pV$ is constant, so halving the volume doubles the pressure. At constant pressure, $V$ is proportional to $T$. At constant volume, $p$ is proportional to $T$. These proportionalities refer to a fixed amount of gas. If a container is opened and the amount of substance changes, apply $pV=nRT$ using the value of $n$ in each state.
:::

:::esempio{titolo="From gauge pressure to absolute pressure"}
A pressure gauge reads $50\,\mathrm{kPa}$ in a container where atmospheric pressure is $100\,\mathrm{kPa}$. The gauge reading is $p_{\mathrm{man}}=p-p_{\mathrm{atm}}$, so the equation of state uses $p=150\,\mathrm{kPa}$. If the volume of the sealed gas doubles at constant temperature, its absolute pressure falls to $75\,\mathrm{kPa}$. In the same environment, the new gauge pressure is therefore $-25\,\mathrm{kPa}$. The negative sign means the pressure inside is lower than atmospheric pressure.
:::

:::esempio{titolo="Comparing states along an isotherm"}
At constant temperature and amount of substance, consider a state with $p=200\,\mathrm{kPa}$ and $V=6\,\mathrm L$. Then $pV=1200\,\mathrm{kPa\,L}=1200\,\mathrm J$. At $12\,\mathrm L$ the pressure is $100\,\mathrm{kPa}$. The two points on the graph lie on the same branch of a hyperbola. The magnitude of its slope decreases as $V$ increases, so equal increments in volume produce progressively smaller decreases in pressure.

::grafico{f="1200/x" punti="6,200,pieno,A;12,100,pieno,B" xmin=4 xmax=16 ymin=0 ymax=320 nomi="V,p (kPa)" titolo="Along the isotherm, the product pV is 1200 kPa L"}
:::

:::esempio{titolo="Moles and mass of oxygen"}
A mass $8.0\,\mathrm g$ of molecular oxygen $\mathrm O_2$, with molar mass $M=32\,\mathrm{g/mol}$, contains $n=\dfrac mM=\dfrac{8.0}{32}\,\mathrm{mol}=0.25\,\mathrm{mol}$. In a volume of $10\,\mathrm L=0.010\,\mathrm{m^3}$ at $300\,\mathrm K$ the absolute pressure is
$$
p=\frac{nRT}{V}=\frac{0.25\cdot8.314\cdot300}{0.010}\,\mathrm{Pa}\simeq6.24\cdot10^4\,\mathrm{Pa}.
$$
:::

::::teorema{#leggi-dei-gas titolo="Isotherms, isobars, and isochores of the ideal gas"}
For a fixed amount $n$ of ideal gas in equilibrium, with $T$ in kelvin:
- if $T$ is constant, $pV$ is constant (isotherm);
- if $p$ is constant, $\dfrac VT$ is constant (isobar);
- if $V$ is constant, $\dfrac pT$ is constant (isochore).

In the $p$-$V$ plane the isotherm is the hyperbola branch $p=\dfrac{nRT}{V}$ and the tangent at one of its points has slope $-\dfrac pV$.

:::dimostrazione
The equation of state $pV=nRT$ holds with $n$ fixed, so the product $nR$ is constant in all the processes considered. At constant $T$ the right-hand side $nRT$ is constant, so $pV$ is too. At constant $p$, dividing by $pT$ gives $\dfrac VT=\dfrac{nR}{p}$, which is constant. At constant $V$, dividing by $VT$ gives $\dfrac pT=\dfrac{nR}{V}$, which is constant.

On the isotherm $p(V)=\dfrac{C}{V}$, with $C=nRT$ constant. The derivative is
$$
\frac{dp}{dV}=-\frac{C}{V^2}=-\frac{1}{V}\cdot\frac{C}{V}=-\frac{p}{V},
$$
which is the slope of the tangent.
:::
::::

:::esempio{titolo="Pressure at constant volume and absolute zero"}
An ideal gas in a rigid container has pressure $100\,\mathrm{kPa}$ at $0\,{}^\circ\mathrm C$, that is, $273.15\,\mathrm K$. Since $\dfrac pT$ is constant, at $t$ degrees Celsius the pressure is
$$
p(t)=100\cdot\frac{t+273.15}{273.15}\,\mathrm{kPa}.
$$
At $20\,{}^\circ\mathrm C$ it equals $107.3\,\mathrm{kPa}$ and at $40\,{}^\circ\mathrm C$ it equals $114.6\,\mathrm{kPa}$. The line vanishes at $t=-273.15\,{}^\circ\mathrm C$, that is, at $T=0\,\mathrm K$. This is an extrapolation of the model: real gases condense before reaching that temperature.

::grafico{f="100*(1+x/273.15)" punti="-273.15,0,pieno,absolute zero;20,107.3,pieno;40,114.6,pieno" xmin=-320 xmax=80 ymin=-15 ymax=135 nomi="t,p" titolo="Pressure of an ideal gas at constant volume as a function of temperature in degrees Celsius"}
:::

:::attenzione
With $R=8.314\,\mathrm{J/(mol\,K)}$ the volume must be expressed in cubic meters. For $1\,\mathrm{mol}$ at $300\,\mathrm K$ in $25\,\mathrm L$ the correct value is $V=0.025\,\mathrm{m^3}$, which gives $p\simeq9.98\cdot10^4\,\mathrm{Pa}$. Writing $V=25$ would give $p\simeq99.8\,\mathrm{Pa}$, a thousand times smaller.
:::

## The microscopic model

:::definizione{#modello-cinetico titolo="Thermal motion and internal energy"}
Gas particles collide with the walls and change their momentum. The repeated impulses produce an average force on the wall, which gives rise to pressure. In the classical model, temperature at equilibrium determines the mean translational kinetic energy per particle:
$$
\langle K_{\mathrm{trasl}}\rangle=\frac32 k_BT,
\qquad k_B=1.381\cdot10^{-23}\,\mathrm{J/K}.
$$
Particles at different speeds contribute to the same average. For a particle of mass $m_0$, $\langle K_{\mathrm{trasl}}\rangle=\frac12 m_0\langle v^2\rangle$. Two gases at the same temperature therefore have the same mean translational energy per particle. The lighter particles have a higher root-mean-square speed, according to $v_{\mathrm{rms}}=\sqrt{\dfrac{3k_BT}{m_0}}$.

For a monatomic ideal gas, internal energy is the sum of the translational energies. Since the number of particles is $N=nN_A$ and $N_Ak_B=R$, it follows that
$$
U=N\langle K_{\mathrm{trasl}}\rangle=\frac32nRT,
\qquad
\Delta U=\frac32nR(T_f-T_i).
$$
At $300\,\mathrm K$, one mole has $U\simeq3741\,\mathrm J$ relative to the reference in this model. If a monatomic ideal gas changes volume but returns to the same temperature and keeps the same number of moles, its change in internal energy is zero. In polyatomic molecules, rotations and vibrations can also contribute to internal energy, so the value $\dfrac32 R$ of the molar heat capacity at constant volume applies to the classical monatomic model.
:::

:::richiamo{titolo="Impulse theorem"}
If an average force $F$ acts on a point mass along a direction for a time interval $\Delta t$, the change in the component of momentum along that direction is $\Delta p=F\Delta t$. This relation also applies to the average force exerted by a set of particles on a wall, with the opposite sign.
:::

::::teorema{#pressione-cinetica titolo="Pressure and translational kinetic energy"}
A container of volume $V$ holds $N$ identical particles of mass $m_0$ that collide elastically with the walls and do not interact with one another. No direction is privileged, that is, $\langle v_x^2\rangle=\langle v_y^2\rangle=\langle v_z^2\rangle$. Then
$$
p=\frac13\,\frac NV\,m_0\langle v^2\rangle,
\qquad
pV=\frac23\,N\langle K_{\mathrm{trasl}}\rangle.
$$
Comparing with $pV=nRT=Nk_BT$ gives $\langle K_{\mathrm{trasl}}\rangle=\dfrac32k_BT$, that is, the relation between temperature and mean kinetic energy used in the definition of thermal motion.

:::dimostrazione
Consider a cubic container of side $L$ and volume $V=L^3$. A particle with velocity component $v_x$ hits the wall perpendicular to the $x$ axis. The collision is elastic, so $v_x$ changes sign and the change in the particle's momentum has magnitude $2m_0|v_x|$. The wall receives an equal and opposite impulse.

Between two successive collisions with the same wall the particle travels $2L$ along $x$, in a time $\dfrac{2L}{|v_x|}$. The number of collisions per unit time is therefore $\dfrac{|v_x|}{2L}$. By the impulse theorem, the average force of one particle on the wall is
$$
F_1=2m_0|v_x|\cdot\frac{|v_x|}{2L}=\frac{m_0v_x^2}{L}.
$$
Summing over $N$ particles, the total force is $F=\dfrac{m_0}{L}\,N\langle v_x^2\rangle$. The wall has area $L^2$, so
$$
p=\frac{F}{L^2}=\frac{N m_0\langle v_x^2\rangle}{L^3}=\frac NV\,m_0\langle v_x^2\rangle.
$$
Since $v^2=v_x^2+v_y^2+v_z^2$ and no direction is privileged, $\langle v_x^2\rangle=\dfrac{\langle v^2\rangle}{3}$. This gives $p=\dfrac13\dfrac NVm_0\langle v^2\rangle$. Multiplying by $V$ and using $\langle K_{\mathrm{trasl}}\rangle=\dfrac12m_0\langle v^2\rangle$ gives
$$
pV=\frac13\,N m_0\langle v^2\rangle=\frac23\,N\,\frac12m_0\langle v^2\rangle=\frac23\,N\langle K_{\mathrm{trasl}}\rangle.
$$
Equating to $Nk_BT$ gives $\langle K_{\mathrm{trasl}}\rangle=\dfrac32k_BT$.
:::
::::

:::esempio{titolo="Root-mean-square speed of nitrogen and helium"}
At $300\,\mathrm K$ each particle has mean translational energy $\dfrac32\cdot1.381\cdot10^{-23}\cdot300\,\mathrm J\simeq6.21\cdot10^{-21}\,\mathrm J$, whatever the gas. The mass of a nitrogen molecule is $m_0=\dfrac{28\cdot10^{-3}\,\mathrm{kg/mol}}{6.022\cdot10^{23}\,\mathrm{mol^{-1}}}\simeq4.65\cdot10^{-26}\,\mathrm{kg}$, so
$$
v_{\mathrm{rms}}=\sqrt{\frac{3k_BT}{m_0}}\simeq517\,\mathrm{m/s}.
$$
For helium, with molar mass $4\cdot10^{-3}\,\mathrm{kg/mol}$, one finds $v_{\mathrm{rms}}\simeq1370\,\mathrm{m/s}$. The ratio of the two speeds is $\sqrt{7}$, equal to the square root of the ratio of the masses. For a given gas the speed grows as $\sqrt T$.

::grafico{f="517*sqrt(x/300);1368*sqrt(x/300)" legenda="Nitrogen;Helium" punti="300,517,pieno;300,1368,pieno" xmin=0 xmax=400 ymin=0 ymax=1600 nomi="T,v" titolo="Root-mean-square speed $v$ in $\mathrm{m/s}$ as a function of absolute temperature $T$ in kelvin"}
:::

:::esempio{titolo="Change in internal energy"}
A monatomic ideal gas of $2.0\,\mathrm{mol}$ is heated by $50\,\mathrm K$. In the classical model
$$
\Delta U=\frac32\,nR\,\Delta T=\frac32\cdot2.0\cdot8.314\cdot50\,\mathrm J\simeq1.25\cdot10^3\,\mathrm J.
$$
The value depends only on the initial and final temperatures. Whether the heating occurs at constant volume, at constant pressure, or in another way, the change in internal energy is the same.
:::

## Reading states and processes

:::osservazione{#lettura-grafici titolo="States and processes on a pressure-volume diagram"}
A point on a $p$-$V$ diagram represents a state of equilibrium. A line represents a sequence of states when the process is slow enough that the gas has a uniform pressure and temperature. A horizontal segment is an isobar. A vertical segment is an isochore. An ideal gas isotherm is a branch of a hyperbola.

Between two states with $p_1V_1=p_2V_2$ and the same number of moles, the equation of state gives $T_1=T_2$.

The equation of state allows the initial and final states to be compared. Calculating the work and heat exchanged requires specifying how the gas goes between them. The chapter on the first law uses this distinction to relate the energy balance to the different segments of a diagram.
:::

:::esempio{titolo="An A-B-C path and the comparison isotherm"}
Consider the states $A(6\,\mathrm L,\,100\,\mathrm{kPa})$, $B(6\,\mathrm L,\,200\,\mathrm{kPa})$, and $C(3\,\mathrm L,\,200\,\mathrm{kPa})$, connected by an isochore $AB$ and an isobar $BC$. The products $pV$ are $600\,\mathrm J$ at $A$, $1200\,\mathrm J$ at $B$, and $600\,\mathrm J$ at $C$. For a fixed number of moles the temperature is proportional to $pV$, so $T_B=2T_A$ and $T_C=T_A$. States $A$ and $C$ lie on the same isotherm, $p=\dfrac{600}{V}$, but the gas passes through a doubled temperature in the intermediate state $B$.

::grafico{f="600/x" vettori="6,100,6,200;6,200,3,200" punti="6,100,pieno,A;6,200,pieno,B;3,200,pieno,C" xmin=2 xmax=10 ymin=0 ymax=250 nomi="V,p" titolo="Volume in liters and pressure in kilopascals. The path $A\to B\to C$ and the isotherm $pV=600\,\mathrm J$ through $A$ and $C$"}
:::

:::attenzione
Two states with the same pressure do not have the same temperature. States $A(6\,\mathrm L,\,100\,\mathrm{kPa})$ and $D(12\,\mathrm L,\,100\,\mathrm{kPa})$ have equal pressure, but $pV$ equals $600\,\mathrm J$ at $A$ and $1200\,\mathrm J$ at $D$. For the same number of moles it follows that $T_D=2T_A$.
:::
