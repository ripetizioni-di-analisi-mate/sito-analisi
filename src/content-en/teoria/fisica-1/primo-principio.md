---
titolo: Temperature, heat and the first law of thermodynamics
sommario: How temperature is measured, how heat changes the temperature and state of bodies, how an ideal gas is described and how the first law connects heat, work and internal energy in processes and cycles.
---

## Temperature and thermal equilibrium

:::definizione{#sistema-termodinamico titolo="Thermodynamic system and state variables"}
A **thermodynamic system** is a portion of matter separated from the rest, the surroundings, by a real or ideal surface; a gas enclosed in a cylinder with a piston is the typical example. The system is *closed* if it exchanges no matter with the surroundings, *isolated* if it exchanges neither matter nor energy. The equilibrium state of a system is described by a few macroscopic quantities, the **state variables**: for a gas they are the pressure $p$, the volume $V$, the temperature $T$ and the amount of substance $n$. A quantity that depends only on the state, and not on the way the system reached it, is called a **state function**; internal energy will be the main example.
:::

:::definizione{#equilibrio-termico titolo="Thermal equilibrium"}
Two systems placed in contact through a wall that allows exchanges of energy, called a **diathermic** wall, evolve until their state variables stop changing; at that point they are said to be in **thermal equilibrium**. A wall that prevents these exchanges is called **adiabatic**, and a thermos approximates a container with adiabatic walls. Every temperature measurement is based on thermal equilibrium, because the thermometer indicates its own state once it has reached equilibrium with the body being measured.
:::

:::teorema{#principio-zero titolo="Zeroth law of thermodynamics"}
If two systems $A$ and $B$ are each in thermal equilibrium with a third system $C$, then $A$ and $B$ are in thermal equilibrium with each other.

It is a law, that is, a statement derived from experience and not provable from other laws. It makes it possible to define **temperature** as the quantity that takes the same value in all systems in thermal equilibrium with one another, and it justifies the use of the thermometer. The thermometer plays the role of system $C$; if it reads the same value in contact with $A$ and with $B$, then the two bodies are in thermal equilibrium even without ever having been placed in contact.
:::

:::definizione{#scale-termometriche titolo="Temperature scales"}
A **temperature scale** assigns a number to temperature by means of a quantity that varies with it, such as the length of a column of mercury or the pressure of a gas at constant volume, and of two reproducible fixed points. Three scales are in use.

- Celsius scale: $0\,^\circ\mathrm{C}$ is the melting point of ice and $100\,^\circ\mathrm{C}$ the boiling point of water at a pressure of $1\,\mathrm{atm}$.
- Kelvin, or absolute, scale, which is the one of the International System: it has the same intervals as the Celsius scale and its zero at **absolute zero**, the minimum temperature, which cannot be reached; $T = t_C + 273.15$ holds, with $T$ in kelvins and $t_C$ in degrees Celsius.
- Fahrenheit scale: ice melts at $32\,^\circ\mathrm{F}$ and water boils at $212\,^\circ\mathrm{F}$, therefore one hundred degrees Celsius correspond to one hundred eighty degrees Fahrenheit and $t_F = \dfrac{9}{5}\,t_C + 32$.

Since the kelvin and the degree Celsius have the same size, a temperature *difference* has the same value on the two scales: $\Delta T = 20\,\mathrm{K}$ is equivalent to $\Delta t_C = 20\,^\circ\mathrm{C}$. In formulas that contain $T$ and not $\Delta T$, such as the equation of state of gases, the temperature in kelvins is used instead. For example $37\,^\circ\mathrm{C}$ corresponds to $310.15\,\mathrm{K}$ and to $\dfrac{9}{5} \cdot 37 + 32 = 98.6\,^\circ\mathrm{F}$.
:::

## Thermal expansion

:::definizione{#dilatazione-lineare titolo="Linear expansion"}
When the temperature of a solid increases, its dimensions generally increase. For a rod of length $L_0$ at temperature $T_0$, over a not too wide temperature interval, the elongation is proportional to the initial length and to the change in temperature:
$$
\Delta L = \alpha\, L_0\, \Delta T, \qquad L = L_0\,(1 + \alpha\,\Delta T) .
$$
The constant $\alpha$ is the **coefficient of linear expansion**; it is measured in $\mathrm{K^{-1}}$ and depends on the material; it is about $1.2 \cdot 10^{-5}\,\mathrm{K^{-1}}$ for steel and $2.3 \cdot 10^{-5}\,\mathrm{K^{-1}}$ for aluminum. The law is experimental and is used to size the expansion joints of bridges and railway tracks. A steel rail $10\,\mathrm{m}$ long that warms up by $30\,\mathrm{K}$ lengthens by $1.2 \cdot 10^{-5} \cdot 10 \cdot 30\,\mathrm{m} = 3.6\,\mathrm{mm}$.
:::

:::teorema{#dilatazione-volumica titolo="Area and volume expansion"}
Let a homogeneous and isotropic solid have coefficient of linear expansion $\alpha$. For small changes in temperature, an area $S_0$ and a volume $V_0$ of the solid change by
$$
\Delta S = 2\alpha\, S_0\, \Delta T, \qquad \Delta V = \beta\, V_0\, \Delta T \quad \text{with } \beta = 3\alpha .
$$
Indeed, for a cube of edge $\ell_0$ one has $V = \ell_0^3\,(1 + \alpha\,\Delta T)^3 = V_0\,(1 + 3\alpha\,\Delta T + 3\alpha^2 \Delta T^2 + \alpha^3 \Delta T^3)$, and since $\alpha\,\Delta T$ is of the order of $10^{-3}$ the terms with $\alpha^2$ and $\alpha^3$ are negligible; for the area the reasoning is the same with the square. A hole in a plate expands as if it were filled with the same material, and the hot fitting of metal rings onto a shaft is based on this fact. For liquids only volume expansion is considered, with a coefficient $\beta$ measured directly and generally larger than that of solids. When a liquid fills a container to the brim and the two are heated together, the volume that overflows is $(\beta_{\ell} - 3\alpha_r)\,V_0\,\Delta T$, where $\beta_{\ell}$ is the coefficient of the liquid and $\alpha_r$ that of the container.
:::

:::osservazione{#acqua-anomala titolo="Behavior of water"}
Between $0\,^\circ\mathrm{C}$ and $4\,^\circ\mathrm{C}$ water contracts when it is heated, therefore its density is maximum at about $4\,^\circ\mathrm{C}$. For this reason, in a lake that freezes in winter the water at the bottom stays at about $4\,^\circ\mathrm{C}$, while the ice, less dense than liquid water, forms at the surface.
:::

## Heat and calorimetry

:::definizione{#calore titolo="Heat"}
**Heat** $Q$ is the energy that passes from one system to another because of a temperature difference. Heat is energy in transit; a body *possesses* internal energy and *exchanges* heat with other bodies. It is measured in joules. The old unit, the **calorie**, is the heat that raises the temperature of $1\,\mathrm{g}$ of water from $14.5\,^\circ\mathrm{C}$ to $15.5\,^\circ\mathrm{C}$, and $1\,\mathrm{cal} = 4.186\,\mathrm{J}$. The equivalence was established by Joule, who heated a mass of water with a paddle wheel driven by falling weights and found that a given amount of mechanical work always corresponds to the same rise in temperature. In the convention adopted, $Q > 0$ when the system absorbs heat and $Q < 0$ when it releases heat.
:::

:::definizione{#capacita-termica titolo="Heat capacity and specific heat"}
If a body absorbs the heat $Q$ and its temperature goes from $T_i$ to $T_f$ without changes of state, its **heat capacity** is
$$
C = \frac{Q}{\Delta T}, \qquad \Delta T = T_f - T_i ,
$$
and it is measured in $\mathrm{J/K}$. For a homogeneous body of mass $m$ the heat capacity is proportional to the mass, $C = m\,c$, and the constant $c$ is the **specific heat** of the material, in $\mathrm{J/(kg\cdot K)}$. The law of calorimetry follows:
$$
Q = m\,c\,\Delta T .
$$
Water has $c_a = 4186\,\mathrm{J/(kg\cdot K)}$, a high value compared with metals: about $900\,\mathrm{J/(kg\cdot K)}$ for aluminum, $450$ for iron, $385$ for copper. Therefore, for equal mass and equal heat absorbed, the temperature rise of water is about one eleventh of that of copper. Heating $2.0\,\mathrm{kg}$ of water from $20\,^\circ\mathrm{C}$ to $70\,^\circ\mathrm{C}$ requires $2.0 \cdot 4186 \cdot 50\,\mathrm{J} \approx 4.2 \cdot 10^5\,\mathrm{J}$.
:::

:::osservazione{#calore-specifico-variabile titolo="Variable specific heat"}
Specific heat depends weakly on temperature, and in exercises it is taken as constant. When the dependence is not negligible, the law holds for an infinitesimal interval, $\delta Q = m\,c(T)\,dT$, and the heat exchanged is an integral:
$$
Q = m \int_{T_i}^{T_f} c(T)\, dT .
$$
The symbol $\delta Q$ is a reminder that heat is not the differential of a state function, because the heat exchanged between two states depends on the process followed, as the first law shows.
:::

::::teorema{#temperatura-di-equilibrio titolo="Equilibrium temperature"}
Two bodies with masses $m_1$, $m_2$, specific heats $c_1$, $c_2$ and initial temperatures $T_1$, $T_2$ are placed in contact in a container with adiabatic walls and negligible heat capacity, called an ideal **calorimeter**. If no changes of state occur, the two bodies reach the equilibrium temperature
$$
T_e = \frac{m_1 c_1 T_1 + m_2 c_2 T_2}{m_1 c_1 + m_2 c_2} .
$$
$T_e$ is the average of the initial temperatures weighted by the heat capacities, therefore it lies between $T_1$ and $T_2$ and is closer to the temperature of the body with the larger heat capacity. The formula extends to several bodies by adding one term for each, and it holds with temperatures in degrees Celsius as well as in kelvins, because the shift of the zero cancels between numerator and denominator. Mixing $1.0\,\mathrm{kg}$ of water at $80\,^\circ\mathrm{C}$ with $2.0\,\mathrm{kg}$ of water at $20\,^\circ\mathrm{C}$ gives $T_e = \dfrac{80 + 2 \cdot 20}{3}\,^\circ\mathrm{C} = 40\,^\circ\mathrm{C}$.

::grafico{f="40+40*exp(-x);40-20*exp(-x)" asintoti="y=40" xmin=0 xmax=5 ymin=0 ymax=100 nomi="t,T" etichette="0.25,88,body 1;0.25,12,body 2;3.4,46,Tₑ = 40 °C" titolo="The temperatures of $1.0\,\mathrm{kg}$ of water at $80\,^\circ\mathrm{C}$ and of $2.0\,\mathrm{kg}$ of water at $20\,^\circ\mathrm{C}$ tend to $T_e = 40\,^\circ\mathrm{C}$; the temperature of the body with twice the heat capacity changes by half as much"}

:::dimostrazione
The walls are adiabatic and the container absorbs no heat, therefore the heat released by one body is entirely absorbed by the other and the sum of the heats exchanged is zero:
$$
Q_1 + Q_2 = m_1 c_1 (T_e - T_1) + m_2 c_2 (T_e - T_2) = 0 .
$$
Factoring out $T_e$ gives $(m_1 c_1 + m_2 c_2)\,T_e = m_1 c_1 T_1 + m_2 c_2 T_2$, and since $m_1 c_1 + m_2 c_2 > 0$ one can divide, which gives the claim.
:::
::::

:::osservazione{#equivalente-in-acqua titolo="Real calorimeter and water equivalent"}
A real calorimeter absorbs part of the heat. This is accounted for with the **water equivalent** $m_e$, the mass of water that has the same heat capacity as the container, the thermometer and the stirrer; in the heat balance, therefore, the calorimeter appears as a mass $m_e$ of water at the initial temperature of the liquid it contains. The water equivalent is obtained from a first experiment with masses of water only, and it then makes it possible to measure the specific heat of an unknown material.
:::

## Changes of state and heat transfer

:::definizione{#calore-latente titolo="Latent heat"}
During a **change of state** at constant pressure (melting, solidification, vaporization, condensation) the temperature remains constant, and the heat absorbed modifies the structure of the substance. The heat needed to change the state of a mass $m$ is
$$
Q = m\,\lambda ,
$$
where $\lambda$ is the **latent heat** of the transition, in $\mathrm{J/kg}$. For water at $1\,\mathrm{atm}$ the latent heat of fusion is $\lambda_f = 3.33 \cdot 10^5\,\mathrm{J/kg}$ at $0\,^\circ\mathrm{C}$ and the latent heat of vaporization is $\lambda_v = 2.26 \cdot 10^6\,\mathrm{J/kg}$ at $100\,^\circ\mathrm{C}$. In the reverse transition (solidification, condensation) the substance releases the same heat, therefore $Q = -m\,\lambda$. Melting $1\,\mathrm{kg}$ of ice requires as much heat as warming $1\,\mathrm{kg}$ of water by about $80\,\mathrm{K}$.

::grafico{f="min(0,-20+20*x/0.418)+max(0,min(100,100*(x-3.748)/4.186))+max(0,20*(x-30.534)/0.402)+0*sqrt(30.936-x)" xmin=0 xmax=31 ymin=-40 ymax=160 nomi="Q,T" etichette="0.6,12,melting;13,112,vaporization" titolo="Temperature of $0.10\,\mathrm{kg}$ of water as a function of the heat absorbed, from ice at $-20\,^\circ\mathrm{C}$ to steam at $120\,^\circ\mathrm{C}$, with $Q$ in $10^4\,\mathrm{J}$; the horizontal segments correspond to the changes of state"}

:::

:::osservazione{#bilancio-con-cambiamenti-di-stato titolo="Heat balances with changes of state"}
When ice and water are mixed in a calorimeter, the final state is not known in advance. Two quantities are then compared, computed taking $0\,^\circ\mathrm{C}$ as the reference temperature: the heat $Q_{\text{avail}}$ that the water releases by cooling down to $0\,^\circ\mathrm{C}$ and the heat $Q_{\text{melt}}$ needed to bring the ice to $0\,^\circ\mathrm{C}$ and melt all of it.

- If $Q_{\text{avail}} > Q_{\text{melt}}$, the ice melts completely and the final temperature, above $0\,^\circ\mathrm{C}$, is obtained from the balance $\sum Q = 0$ with the term $m\,\lambda_f$.
- If $Q_{\text{avail}} < Q_{\text{melt}}$, the ice melts only partially, the final temperature is $0\,^\circ\mathrm{C}$ and the melted mass is obtained from the heat that remains available after the ice has been warmed to $0\,^\circ\mathrm{C}$.
- If $Q_{\text{avail}}$ is smaller even than the heat needed only to bring the ice to $0\,^\circ\mathrm{C}$, part of the water solidifies, and the reasoning is repeated with the roles exchanged.
:::

:::teorema{#legge-di-fourier titolo="Fourier's law of conduction"}
A plane wall of thickness $d$ and area $A$, with its faces kept at temperatures $T_1 > T_2$, is crossed by the heat $Q$ in the time $\Delta t$ with power
$$
P = \frac{Q}{\Delta t} = k\,A\,\frac{T_1 - T_2}{d} .
$$
It is an experimental law. The constant $k$ is the **thermal conductivity** of the material, in $\mathrm{W/(m\cdot K)}$, high in metals (about $400$ for copper) and low in insulators (about $0.04$ for glass wool). In the steady state the temperature inside the wall decreases linearly from one face to the other. The law is used to estimate the heat losses of a building: a wall of $10\,\mathrm{m^2}$, $30\,\mathrm{cm}$ thick, with $k = 0.60\,\mathrm{W/(m\cdot K)}$ and faces at $18\,^\circ\mathrm{C}$ and $4\,^\circ\mathrm{C}$, loses $P = 0.60 \cdot 10 \cdot \dfrac{14}{0.30}\,\mathrm{W} = 280\,\mathrm{W}$.

::grafico{f="18-14*x/30+0*sqrt(x*(30-x))" area="20;0;0;30" xmin=-10 xmax=40 ymin=0 ymax=20 nomi="x,T" punti="0,18,pieno;30,4,pieno" etichette="1.5,19,T₁ = 18 °C;31,6,T₂ = 4 °C" titolo="Temperature profile in the wall, with $x$ in centimeters: in the steady state $T$ decreases linearly from $T_1$ to $T_2$"}

:::

:::osservazione{#convezione-e-irraggiamento titolo="Convection and radiation"}
Conduction transfers energy without displacement of matter. In fluids heat is also transferred by **convection**, which involves a transport of matter; the heated fluid expands, becomes less dense and rises, and its place is taken by colder fluid. **Radiation** is the emission of electromagnetic waves and occurs even in vacuum. A body of area $A$ and absolute temperature $T$ emits the power $P = e\,\sigma\,A\,T^4$ (**Stefan-Boltzmann law**), with $\sigma = 5.67 \cdot 10^{-8}\,\mathrm{W/(m^2\cdot K^4)}$ and emissivity $0 \le e \le 1$.
:::

## Ideal gas and equation of state

:::definizione{#gas-perfetto titolo="Ideal gas"}
An **ideal gas** is a model of a gas in which the molecules have negligible volume of their own and interact only through elastic collisions, without forces at a distance. Rarefied real gases, at not too high pressures and at temperatures far from the liquefaction temperature, follow its behavior well; air at atmospheric pressure and room temperature is an example. The amount of gas is measured in **moles**. One mole contains $N_A = 6.022 \cdot 10^{23}$ particles (**Avogadro's number**), and $n = \dfrac{m}{M}$, where $M$ is the molar mass: $32.0\,\mathrm{g/mol}$ for oxygen $\mathrm{O_2}$, $28.0\,\mathrm{g/mol}$ for nitrogen $\mathrm{N_2}$, about $29\,\mathrm{g/mol}$ for air.
:::

:::teorema{#leggi-dei-gas titolo="Boyle's law and Gay-Lussac's laws"}
For a fixed amount of ideal gas the following experimental laws hold.

- **Boyle's law**, at constant temperature: $pV = \text{constant}$.
- **First law of Gay-Lussac**, at constant pressure: $V = V_0\,(1 + \alpha_0\, t_C)$, that is, $\dfrac{V}{T} = \text{constant}$.
- **Second law of Gay-Lussac**, at constant volume: $p = p_0\,(1 + \alpha_0\, t_C)$, that is, $\dfrac{p}{T} = \text{constant}$.

Here $V_0$ and $p_0$ are the values at $0\,^\circ\mathrm{C}$, and $\alpha_0 = \dfrac{1}{273.15}\,\mathrm{K^{-1}}$ is the same for all gases. Extrapolated, the two laws of Gay-Lussac give zero volume and zero pressure at $t_C = -273.15\,^\circ\mathrm{C}$; this is the origin of the Kelvin scale, on which the laws become direct proportionalities. A gas enclosed in a rigid container at $27\,^\circ\mathrm{C}$ and brought to $327\,^\circ\mathrm{C}$ doubles its pressure, because the absolute temperature goes from $300\,\mathrm{K}$ to $600\,\mathrm{K}$.
:::

:::teorema{#equazione-di-stato titolo="Equation of state of the ideal gas"}
The equilibrium states of $n$ moles of ideal gas satisfy
$$
pV = nRT ,
$$
with $p$ in pascals, $V$ in cubic meters, $T$ in kelvins and $R = 8.314\,\mathrm{J/(mol\cdot K)}$ (**gas constant**). The equation summarizes in a single relation the laws of Boyle and Gay-Lussac and Avogadro's law, according to which equal volumes of different gases, at the same pressure and temperature, contain the same number of moles. Written with the number of molecules $N = n N_A$ it becomes $pV = N k_B T$, with $k_B = \dfrac{R}{N_A} = 1.38 \cdot 10^{-23}\,\mathrm{J/K}$ (**Boltzmann constant**). Two of the three variables $p$, $V$, $T$ determine the third, therefore the equilibrium state of a fixed amount of gas is a point of the **Clapeyron plane** $(V, p)$. One mole at $0\,^\circ\mathrm{C}$ and $1.013 \cdot 10^5\,\mathrm{Pa}$ occupies $V = \dfrac{8.314 \cdot 273.15}{1.013 \cdot 10^5}\,\mathrm{m^3} = 22.4 \cdot 10^{-3}\,\mathrm{m^3}$, that is, $22.4\,\mathrm{L}$.

::grafico{f="2/x;4/x;6/x" xmin=0 xmax=6 ymin=0 ymax=5 nomi="V,p" etichette="3.05,2.15,T₃;3.05,1.48,T₂;3.05,0.82,T₁" titolo="Isotherms of the ideal gas in the $(V, p)$ plane, in arbitrary units: they are branches of hyperbolas $pV = nRT$, farther from the axes for higher temperatures, with $T_1 < T_2 < T_3$"}

:::

## Thermodynamic work

:::definizione{#trasformazione-quasistatica titolo="Quasi-static process"}
A **process** is the passage of a system from one equilibrium state to another. It is **quasi-static** if it occurs so slowly that the system passes through a succession of equilibrium states; in this case $p$, $V$, $T$ are defined at every instant, and the process is represented by a curve in the $(V, p)$ plane. A quasi-static process without friction is **reversible**: by slightly reversing the external conditions, the system retraces the same states in the opposite direction. A rapid expansion, such as that of a gas escaping from a punctured cylinder, is irreversible, and in the $(V, p)$ plane only its initial and final states are represented.
:::

:::definizione{#lavoro-termodinamico titolo="Thermodynamic work"}
A gas at pressure $p$ is enclosed in a cylinder by a piston of area $A$. If the piston moves outward by $dx$, the gas exerts the force $pA$ along the displacement and does the work $\delta L = pA\,dx = p\,dV$. In a quasi-static process from the volume $V_i$ to the volume $V_f$ the **work done by the system** is
$$
L = \int_{V_i}^{V_f} p\, dV .
$$
The work is positive in an expansion, where $dV > 0$, negative in a compression and zero if the volume does not change. At constant pressure the integral equals $L = p\,(V_f - V_i)$; a gas at $2.0 \cdot 10^5\,\mathrm{Pa}$ that expands from $1.0\,\mathrm{L}$ to $3.0\,\mathrm{L}$ does $L = 2.0 \cdot 10^5 \cdot 2.0 \cdot 10^{-3}\,\mathrm{J} = 400\,\mathrm{J}$. In formulas volumes are expressed in cubic meters, with $1\,\mathrm{L} = 10^{-3}\,\mathrm{m^3}$.
:::

:::richiamo{titolo="Definite integral"}
If $f$ is continuous on $[a, b]$ and $F$ is an antiderivative of it, then $\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$, and for $f \geq 0$ the integral is the area under the graph. In particular, for $a, b > 0$, $\displaystyle\int_a^b \frac{dx}{x} = \ln\frac{b}{a}$. See the topic on integrals in Mathematical Analysis 1.
:::

:::osservazione{#lavoro-come-area titolo="Work as an area in the (V, p) plane"}
Since $L$ is the integral of $p$ with respect to $V$, the work of a quasi-static expansion is the **area** under the curve of the process in the $(V, p)$ plane, between $V_i$ and $V_f$; in a compression the area is the same and the work has a negative sign. Two processes with the same initial and final states can have different areas under the curve, therefore work *depends on the process* and is not a state function.

::grafico{f="6/x" area="6/x;0;1.5;4" punti="1.5,4,pieno,A;4,1.5,pieno,B" segmenti="1.5,0,1.5,4;4,0,4,1.5" xmin=0 xmax=6 ymin=0 ymax=5 nomi="V,p" titolo="The work of the expansion from $A$ to $B$ is the area under the curve, $L = \displaystyle\int_{V_A}^{V_B} p\,dV$; $V$ and $p$ in arbitrary units"}

::grafico{vettori="1,1,1,3;1,3,4,3;1,1,4,1;4,1,4,3" area="3;0;1;4" punti="1,1,pieno,A;4,3,pieno,B;1,3,pieno,C;4,1,pieno,D" xmin=0 xmax=5 ymin=0 ymax=4 nomi="V,p" titolo="From $A$ to $B$ along $ACB$ the work is the shaded area, $3 \cdot 3 = 9$ with $V$ and $p$ in arbitrary units; along $ADB$ it is the area under the segment $AD$, $3 \cdot 1 = 3$"}

:::

## First law of thermodynamics

:::definizione{#energia-interna titolo="Internal energy"}
The **internal energy** $U$ of a system is the sum of the kinetic energies of its particles, measured in the center-of-mass frame, and of the potential energies of their interactions. It is a state function, therefore it depends only on the state of the system and not on its history. In a process what matters is the change $\Delta U = U_f - U_i$, which is the same for all processes between the same two states.
:::

:::teorema{#primo-principio titolo="First law of thermodynamics"}
In every process of a closed system between two equilibrium states
$$
\Delta U = Q - L ,
$$
where $Q$ is the heat absorbed by the system and $L$ the work done by the system. In infinitesimal form $dU = \delta Q - \delta L$.

It is a law derived from experience. Joule's experiments show that, between two given states, $Q$ and $L$ depend on the process, while the difference $Q - L$ is always the same. The first law extends the conservation of energy to thermal phenomena, since it states that the heat absorbed is divided between an increase in internal energy and work delivered to the outside. If a gas absorbs $500\,\mathrm{J}$ of heat and does $200\,\mathrm{J}$ of work while expanding, its internal energy increases by $300\,\mathrm{J}$.
:::

:::osservazione{#casi-del-primo-principio titolo="Special cases of the first law"}
- Isolated system: $Q = 0$ and $L = 0$, therefore $\Delta U = 0$ and internal energy is conserved.
- Adiabatic process: $Q = 0$, therefore $\Delta U = -L$; a gas that expands without exchanging heat does work at the expense of its own internal energy.
- Constant-volume process: $L = 0$, therefore $\Delta U = Q$.
- Cyclic process: the final state coincides with the initial one, therefore $\Delta U = 0$ and $Q = L$.

The first law also holds in changes of state. When water boils at atmospheric pressure, part of the latent heat becomes work of expansion of the vapor and the rest increases the internal energy.
:::

## Internal energy and molar heats of the ideal gas

:::teorema{#energia-interna-gas-perfetto titolo="Internal energy of the ideal gas"}
The internal energy of a fixed amount of ideal gas depends only on the temperature: $U = U(T)$.

It is an experimental result, obtained by Joule with **free expansion**. A rarefied gas, enclosed in a container with rigid and adiabatic walls, expands into vacuum in a second container. The gas exchanges no heat and does no work, because nothing opposes the expansion, therefore by the first law $\Delta U = 0$. In the expansion volume and pressure change, while the measured temperature stays the same; therefore $U$ depends only on $T$. In the ideal gas model the result is expected, since the molecules do not interact at a distance and the internal energy is only kinetic energy.
:::

:::definizione{#calori-molari titolo="Molar heats"}
The **molar heat** of a gas is the heat needed to raise the temperature of one mole by $1\,\mathrm{K}$. Its value depends on the process, and two are used:
$$
c_V = \frac{1}{n}\,\frac{\delta Q}{dT}\ \text{ at constant volume}, \qquad c_p = \frac{1}{n}\,\frac{\delta Q}{dT}\ \text{ at constant pressure},
$$
measured in $\mathrm{J/(mol\cdot K)}$. For an ideal gas the molar heats are constant, with values that depend on the structure of the molecules:

- **monatomic** gas (helium, argon): $c_V = \dfrac{3}{2}R$ and $c_p = \dfrac{5}{2}R$;
- **diatomic** gas at room temperature (nitrogen, oxygen, air): $c_V = \dfrac{5}{2}R$ and $c_p = \dfrac{7}{2}R$.

The ratio $\gamma = \dfrac{c_p}{c_V}$ is therefore $\dfrac{5}{3}$ for monatomic gases and $\dfrac{7}{5} = 1.40$ for diatomic ones, and it appears in adiabatic processes. In a constant-volume process $n$ moles absorb $Q = n\,c_V\,\Delta T$, in a constant-pressure one $Q = n\,c_p\,\Delta T$.
:::

::::teorema{#variazione-energia-interna titolo="Change in internal energy of the ideal gas"}
In *every* process of $n$ moles of ideal gas from the temperature $T_i$ to the temperature $T_f$
$$
\Delta U = n\,c_V\,(T_f - T_i) ,
$$
even when the volume is not constant. The formula gives $\Delta U$ in all processes of the ideal gas; for example $2.0\,\mathrm{mol}$ of monatomic gas going from $300\,\mathrm{K}$ to $400\,\mathrm{K}$ have $\Delta U = 2.0 \cdot \dfrac{3}{2} \cdot 8.314 \cdot 100\,\mathrm{J} \approx 2.5\,\mathrm{kJ}$, whatever the process.

:::dimostrazione
Let $A$ and $B$ be the initial and final states, with temperatures $T_i$ and $T_f$, and let $C$ be the state with the same volume as $A$ and temperature $T_f$. Along the isochoric process $AC$ the work is zero, therefore by the first law $\Delta U_{AC} = Q_{AC} = n\,c_V\,(T_f - T_i)$. The states $C$ and $B$ have the same temperature and the internal energy of the ideal gas depends only on $T$, therefore $\Delta U_{CB} = 0$. Since $U$ is a state function, $\Delta U_{AB} = \Delta U_{AC} + \Delta U_{CB} = n\,c_V\,(T_f - T_i)$, whatever the process from $A$ to $B$.
:::
::::

::::teorema{#relazione-di-mayer titolo="Mayer's relation"}
For an ideal gas
$$
c_p - c_V = R .
$$
At constant pressure the gas, besides increasing its internal energy, does work by expanding, therefore for the same change in temperature it absorbs more heat than at constant volume. The relation makes it possible to obtain one molar heat from the other and gives $\gamma = 1 + \dfrac{R}{c_V}$.

:::dimostrazione
The gas is heated at constant pressure by $dT$. The heat absorbed is $\delta Q = n\,c_p\,dT$, and by the change in internal energy of the ideal gas $dU = n\,c_V\,dT$. Differentiating the equation of state at constant $p$ gives $p\,dV = nR\,dT$, therefore the work is $\delta L = p\,dV = nR\,dT$. Substituting into the first law $dU = \delta Q - \delta L$ gives
$$
n\,c_V\,dT = n\,c_p\,dT - nR\,dT ,
$$
and dividing by $n\,dT$ gives $c_V = c_p - R$, that is, the claim.
:::
::::

## Processes of the ideal gas

:::teorema{#trasformazione-isocora titolo="Isochoric process"}
In a constant-volume process of $n$ moles of ideal gas
$$
\frac{p}{T} = \text{constant}, \qquad L = 0, \qquad Q = \Delta U = n\,c_V\,\Delta T .
$$
The work is zero because $dV = 0$, and the first law gives $Q = \Delta U$. In the $(V, p)$ plane the isochoric process is a vertical segment, and all the heat absorbed increases the internal energy. A rigid container with $1.0\,\mathrm{mol}$ of air heated by $10\,\mathrm{K}$ absorbs $Q = \dfrac{5}{2} \cdot 8.314 \cdot 10\,\mathrm{J} \approx 208\,\mathrm{J}$.
:::

:::teorema{#trasformazione-isobara titolo="Isobaric process"}
In a constant-pressure process of $n$ moles of ideal gas
$$
\frac{V}{T} = \text{constant}, \qquad L = p\,\Delta V = nR\,\Delta T, \qquad \Delta U = n\,c_V\,\Delta T, \qquad Q = n\,c_p\,\Delta T .
$$
The work is the integral of a constant, and $p\,\Delta V = nR\,\Delta T$ by the equation of state. In the $(V, p)$ plane the isobaric process is a horizontal segment. For a diatomic gas the three terms are in the ratio $L : \Delta U : Q = 2 : 5 : 7$, therefore $\dfrac{2}{7}$ of the heat absorbed becomes work.
:::

::::teorema{#trasformazione-isoterma titolo="Isothermal process"}
In a quasi-static process at constant temperature $T$ of $n$ moles of ideal gas, from the volume $V_i$ to the volume $V_f$,
$$
pV = \text{constant}, \qquad \Delta U = 0, \qquad Q = L = nRT \ln\frac{V_f}{V_i} .
$$
In an isothermal expansion the gas absorbs heat and returns all of it as work; in a compression it releases to the surroundings, as heat, the work it receives. Since $p_i V_i = p_f V_f$, the ratio of the volumes can be replaced by $\dfrac{p_i}{p_f}$. For $1.0\,\mathrm{mol}$ at $300\,\mathrm{K}$ that doubles its volume, $L = 8.314 \cdot 300 \cdot \ln 2\,\mathrm{J} \approx 1.73\,\mathrm{kJ}$.

:::dimostrazione
The temperature does not change and the internal energy of the ideal gas depends only on $T$, therefore $\Delta U = 0$ and by the first law $Q = L$. Along the process $p = \dfrac{nRT}{V}$ with $T$ constant, therefore
$$
L = \int_{V_i}^{V_f} \frac{nRT}{V}\, dV = nRT \int_{V_i}^{V_f} \frac{dV}{V} = nRT \ln\frac{V_f}{V_i} .
$$
:::
::::

::::teorema{#trasformazione-adiabatica titolo="Adiabatic process"}
In a quasi-static adiabatic process of $n$ moles of ideal gas
$$
pV^{\gamma} = \text{constant}, \qquad TV^{\gamma - 1} = \text{constant}, \qquad Q = 0 ,
$$
and the work done by the gas from the state $(p_i, V_i, T_i)$ to the state $(p_f, V_f, T_f)$ is
$$
L = -\Delta U = n\,c_V\,(T_i - T_f) = \frac{p_i V_i - p_f V_f}{\gamma - 1} .
$$
Since $\gamma > 1$, in the $(V, p)$ plane the adiabat through a point is steeper than the isotherm through the same point. In an adiabatic expansion the gas does work and cools down; in a compression it heats up, like the air in a bicycle pump. A diatomic gas compressed adiabatically to half its volume goes from $300\,\mathrm{K}$ to $300 \cdot 2^{0.40}\,\mathrm{K} \approx 396\,\mathrm{K}$.

::grafico{f="4/x;2*(2/x)^1.4" punti="2,2,pieno,A" xmin=0 xmax=6 ymin=0 ymax=6 nomi="V,p" etichette="4.8,1.05,isotherm;4.4,0.3,adiabat" titolo="Isotherm $pV = \text{constant}$ and adiabat $pV^{\gamma} = \text{constant}$ with $\gamma = 1.4$ through the same state $A$, in arbitrary units; the adiabat is steeper"}

:::dimostrazione
The heat exchanged is zero, therefore by the first law $dU = -p\,dV$; moreover, by the change in internal energy of the ideal gas, $dU = n\,c_V\,dT$. Substituting $p = \dfrac{nRT}{V}$ gives
$$
n\,c_V\,dT = -\frac{nRT}{V}\,dV
\quad\Longrightarrow\quad
\frac{dT}{T} = -\frac{R}{c_V}\,\frac{dV}{V} = -(\gamma - 1)\,\frac{dV}{V} ,
$$
where by Mayer's relation $\dfrac{R}{c_V} = \dfrac{c_p - c_V}{c_V} = \gamma - 1$. Integrating between the initial state and a generic state of the process gives
$$
\ln\frac{T}{T_i} = -(\gamma - 1) \ln\frac{V}{V_i}
\quad\Longrightarrow\quad
T V^{\gamma - 1} = T_i V_i^{\gamma - 1} ,
$$
and substituting $T = \dfrac{pV}{nR}$ gives $pV^{\gamma} = p_i V_i^{\gamma}$. Finally $L = -\Delta U = n\,c_V\,(T_i - T_f)$; since $nT = \dfrac{pV}{R}$ and $\dfrac{c_V}{R} = \dfrac{1}{\gamma - 1}$, the work is $\dfrac{p_i V_i - p_f V_f}{\gamma - 1}$.
:::
::::

:::osservazione{#confronto-trasformazioni titolo="Summary of the processes"}
For $n$ moles of ideal gas the quantities of the four processes are always obtained from $\Delta U = n\,c_V\,\Delta T$ and from the first law $Q = \Delta U + L$.

- Isochoric: $L = 0$ and $Q = n\,c_V\,\Delta T$.
- Isobaric: $L = p\,\Delta V$ and $Q = n\,c_p\,\Delta T$.
- Isothermal: $\Delta U = 0$ and $Q = L = nRT\ln\dfrac{V_f}{V_i}$.
- Adiabatic: $Q = 0$ and $L = -n\,c_V\,\Delta T$.

In exercises the missing variables of each state are obtained from the equation of state, $\Delta U$ and $L$ are computed and $Q$ is obtained by difference; the sign of each quantity is to be compared with the physical meaning of the process.
:::

## Thermodynamic cycles

:::definizione{#ciclo-termodinamico titolo="Thermodynamic cycle"}
A **cycle** is a succession of processes at the end of which the system returns to its initial state. Since $U$ is a state function, in a cycle $\Delta U = 0$, and by the first law
$$
Q_{\text{tot}} = L_{\text{tot}} ,
$$
where $Q_{\text{tot}}$ is the algebraic sum of the heats exchanged in the individual processes and $L_{\text{tot}}$ the sum of the works. The heat *absorbed* $Q_{\text{in}}$ is the sum of the positive terms, the heat *released* $Q_{\text{out}}$ is the absolute value of the sum of the negative terms, therefore $L_{\text{tot}} = Q_{\text{in}} - Q_{\text{out}}$. A cycle that does positive work converts part of the heat absorbed into work and is the model of a heat engine; for the efficiency and the limits of this conversion, see the topic on the second law of thermodynamics.
:::

::::teorema{#lavoro-di-un-ciclo titolo="Work of a cycle"}
The total work of a quasi-static cycle is, in absolute value, the area enclosed by the curve of the cycle in the $(V, p)$ plane; it is positive if the cycle is traversed clockwise and negative if it is traversed counterclockwise.

The result makes it possible to compute the work of a cycle without adding the individual contributions. The rectangular cycle in the figure, formed by two isobaric and two isochoric processes and traversed clockwise, does the work $L = (p_2 - p_1)(V_2 - V_1)$.

::grafico{vettori="1,1,1,3;1,3,4,3;4,3,4,1;4,1,1,1" area="3;1;1;4" punti="1,1,pieno,A;1,3,pieno,B;4,3,pieno,C;4,1,pieno,D" segmenti="0,1,1,1;0,3,1,3;1,0,1,1;4,0,4,1" etichette="0.25,3.15,p₂;0.25,1.15,p₁;1.1,0.3,V₁;4.1,0.3,V₂" xmin=0 xmax=5 ymin=0 ymax=4 nomi="V,p" titolo="Cycle $ABCDA$ traversed clockwise, in arbitrary units: the total work is positive and equal to the area of the rectangle, $(p_2 - p_1)(V_2 - V_1)$"}

:::dimostrazione
Consider a cycle traversed clockwise and divide it into the upper part, traversed from left to right with $dV > 0$, and the lower part, traversed from right to left with $dV < 0$. The work of the upper part is the area under it, with a positive sign; the work of the lower part is the area under it, with a negative sign. The sum is the difference of the two areas, that is, the area enclosed by the cycle. In the counterclockwise direction the roles of the two parts are exchanged, therefore the work changes sign.
:::
::::
