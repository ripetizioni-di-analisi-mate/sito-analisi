---
titolo: Temperature, heat, and ideal gases
sommario: Thermal equilibrium, expansion, energy balances with and without phase changes, heat transfer, and the ideal gas laws.
---

## Temperature and thermal equilibrium

:::definizione{#temperatura titolo="Temperature and thermal equilibrium"}
Two bodies are in **thermal equilibrium** if they stay at the same temperature when brought into contact through a wall that allows heat to pass. The zeroth law of thermodynamics states that if two bodies are each in thermal equilibrium with a third, they are in thermal equilibrium with each other. A thermometer measures the temperature of a body after coming into equilibrium with it. The measurement accurately represents the body's initial state if the thermometer absorbs or releases a negligible amount of energy.

Let $t$ be the numerical value of the temperature in degrees Celsius and let $T$ be its value in kelvin. The two scales have increments of the same size, so their numerical values satisfy
$$
T=t+273.15,
\qquad
T_2-T_1=t_2-t_1.
$$
For example, $20\,{}^\circ\mathrm C$ corresponds to $293.15\,\mathrm K$, and a rise of $20\,{}^\circ\mathrm C$ corresponds to a rise of $20\,\mathrm K$. At standard atmospheric pressure, pure water melts at about $0\,{}^\circ\mathrm C$ and boils at about $100\,{}^\circ\mathrm C$.
:::

:::attenzione
Ratios of temperatures in the gas laws use kelvin. If an ideal gas in a sealed rigid container goes from $20$ to $40\,{}^\circ\mathrm C$, the ratio of final to initial pressure is
$$
\frac{p_2}{p_1}=\frac{313.15}{293.15}\simeq1.068.
$$
The pressure rises by about $6.8\%$. The ratio $\dfrac{40}{20}$ would give a doubling because it uses a scale whose zero does not correspond to absolute zero.
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

::grafico{f="0.024*x" punti="50,1.2,pieno" xmin=-5 xmax=65 ymin=-0.2 ymax=2 nomi="ΔT,ΔL (mm)" titolo="For this rod, the slope is 0.024 mm per kelvin"}
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
The power used in the calculation is the power delivered to the water. If some energy heats the container or escapes to the surroundings, the electrical power supplied to the heater alone is insufficient for this calculation.
:::

:::teorema{#equilibrio-calorimetrico titolo="Calorimetry and energy balance"}
Let $C_h$ and $C_c$ be the heat capacities of two bodies, and let $t_h>t_c$ be their initial temperatures. If the system is isolated, exchanges are limited to heat, and neither body changes phase, the energy released by the warmer body is absorbed by the cooler body. At their common final temperature $t_f$,
$$
C_h(t_f-t_h)+C_c(t_f-t_c)=0.
$$
Collecting the terms in $t_f$ gives
$$
t_f=\frac{C_ht_h+C_ct_c}{C_h+C_c}.
$$
This is a weighted mean with positive weights, so $t_c<t_f<t_h$. Suppose $0.20\,\mathrm{kg}$ of water at $60\,{}^\circ\mathrm C$ is mixed with $0.30\,\mathrm{kg}$ at $20\,{}^\circ\mathrm C$. The two masses have the same specific heat capacity, which cancels. The result is $t_f=\dfrac{0.20\cdot60+0.30\cdot20}{0.20+0.30}\,{}^\circ\mathrm C=36\,{}^\circ\mathrm C$.

If the container has appreciable heat capacity $C_r$ and is initially at $t_r$, add $C_r(t_f-t_r)$ to the balance. The final temperature moves toward $t_r$ relative to the value calculated without the container because the weighted mean now includes $C_r$.
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

::grafico{linee="0,-20 42,0 376,0 459.6,20" punti="42,0,pieno,42 kJ;376,0,pieno,376 kJ" xmin=-30 xmax=500 ymin=-25 ymax=25 nomi="Q,t (°C)" titolo="Melting occurs between 42 kJ and 376 kJ at 0 °C"}
:::

:::esempio{titolo="Partial melting in an insulated container"}
Mix $0.20\,\mathrm{kg}$ of ice at $0\,{}^\circ\mathrm C$ with $0.30\,\mathrm{kg}$ of water at $40\,{}^\circ\mathrm C$. The container is insulated and its heat capacity is negligible. Before writing the balance, compare the heat the water can release by cooling to $0\,{}^\circ\mathrm C$ with the heat required to melt all the ice:
$$
Q_{\mathrm{disp}}=0.30\cdot4180\cdot40\,\mathrm J=50\,160\,\mathrm J,
\quad
Q_{\mathrm{fus}}=0.20\cdot334\,000\,\mathrm J=66\,800\,\mathrm J.
$$
Since $Q_{\mathrm{disp}}<Q_{\mathrm{fus}}$, both phases remain at $0\,{}^\circ\mathrm C$ in equilibrium. The mass of ice that melts is $\dfrac{Q_{\mathrm{disp}}}{\ell_f}\simeq0.150\,\mathrm{kg}$, so about $0.050\,\mathrm{kg}$ of ice remains. If the two energies were equal, all the ice would melt and the resulting water would still be at $0\,{}^\circ\mathrm C$. Water can reach a higher temperature only when there is energy left over.
:::

## Heat transfer

:::teorema{#trasmissione titolo="Conduction, convection, and radiation"}
In **conduction**, energy travels through matter without bulk movement of matter. Let $\kappa$ be the thermal conductivity of a uniform plane wall of area $A$ and thickness $d$. In steady state, if the temperatures of the two faces are $T_h>T_c$, the rate of heat transfer from the warm side to the cool side is
$$
P=\kappa A\frac{T_h-T_c}{d}.
$$
In steady state the wall does not store energy. If two layers are in perfect contact and lateral losses are negligible, the rate of heat transfer through the first equals the rate through the second. For each layer $\Delta T_i=P\dfrac{d_i}{\kappa_i A}$. Adding the temperature drops gives
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
The temperatures are absolute. If the surface is colder than the environment, then $P_{\mathrm{net}}<0$, so incoming radiation carries more energy than outgoing radiation.
:::

## The state of an ideal gas

:::teorema{#gas-ideale titolo="The ideal gas equation of state"}
An **ideal gas** is a model in which particles have negligible volume and move without interacting between elastic collisions. The model approximates many dilute gases far from condensation. In equilibrium,
$$
pV=nRT,
\qquad R=8.314\,\mathrm{J/(mol\,K)}.
$$
Here $p$ is absolute pressure, $V$ is volume, $n$ is the amount of substance in moles, and $T$ is absolute temperature. If the mass is $m$ and the molar mass is $M$, then $n=\dfrac mM$, with consistent mass units. With $R$ expressed in the units given, use pascals, cubic meters, and kelvin. For example, $25\,\mathrm L=0.025\,\mathrm{m^3}$ and at $300\,\mathrm K$ one mole in that volume exerts $p=\dfrac{8.314\cdot300}{0.025}\,\mathrm{Pa}\simeq9.98\cdot10^4\,\mathrm{Pa}$.

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
At $300\,\mathrm K$, one mole has $U\simeq3741\,\mathrm J$ relative to the reference in this model. If a monatomic ideal gas changes volume but returns to the same temperature and keeps the same number of moles, its change in internal energy is zero. Rotations and vibrations can also contribute to internal energy in gases with polyatomic molecules. The value $\dfrac32 R$ of the molar heat capacity at constant volume therefore applies to the classical monatomic model.
:::

## Reading states and processes

:::osservazione{#lettura-grafici titolo="States and processes on a pressure-volume diagram"}
A point on a $p$-$V$ diagram represents a state of equilibrium. A line represents a sequence of states when the process is slow enough that the gas has a uniform pressure and temperature. A horizontal segment is an isobar. A vertical segment is an isochore. An ideal gas isotherm is a branch of a hyperbola.

Between two states with $p_1V_1=p_2V_2$ and the same number of moles, the equation of state gives $T_1=T_2$. For example, start at $100\,\mathrm{kPa}$ and $6\,\mathrm L$, double the pressure at constant volume, and halve the volume at constant pressure. Along the two stages, $pV$ first rises to $1200\,\mathrm J$ and then falls to $600\,\mathrm J$. The initial and final temperatures are equal, while temperature changes during the process.

The equation of state allows the initial and final states to be compared. Calculating the work and heat exchanged requires specifying how the gas goes between them. The chapter on the first law uses this distinction to relate the energy balance to the different segments of a diagram.
:::
