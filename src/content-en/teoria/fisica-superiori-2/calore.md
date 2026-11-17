---
titolo: "Heat and calorimetry"
sommario: "Specific heat capacity, heat capacity, equilibrium, power and heat transfer."
---

## Heat and temperature

:::definizione{#calore titolo="Energy transferred due to a temperature difference"}
**Heat** is energy transferred between two systems because of a temperature difference. It is denoted by $Q$ and measured in joules. For the object whose energy balance we are writing, take $Q>0$ if it receives energy as heat and $Q<0$ if it gives it out. The words *absorbed* and *released* indicate which object the balance refers to.
:::

:::osservazione{titolo="Sign of heat in the balance"}
A warm cup in contact with a cooler saucer gives energy to it. If we consider only the cup, the transfer is negative. For the saucer the same transfer is positive. For the combined system, an internal transfer does not change its total energy. Any transfer to the air, however, crosses the system boundary.
:::

:::osservazione{#confine-termico titolo="Choosing the system boundary"}
If the system is just the water in a cup, both the cup and the air lie outside its boundary. As the water warms, measuring the energy supplied to the whole arrangement is insufficient to tell how much the water received. For a balance covering both cup and water, the exchange between them is internal. Include the exchanges with the air, the energy supplied by any heater, and any other transfers across the chosen boundary. Naming the system before writing the balance helps assign each contribution correctly.

Two procedures can bring the same sample to the same final temperature. A hot vessel can warm the water through a temperature difference. In an insulated vessel, a stirrer can supply energy to the water by doing work. The temperature change can thus be the same even though the energy transfer mechanism differs. Use the relation with temperature to find the heat exchanged when the model specifies the other contributions.
:::

## Specific heat capacity

:::teorema{#specifico titolo="Heating without a change of phase"}
A sample of mass $m$ stays in one phase and changes temperature through heat transfer alone. When its **specific heat capacity** $c$ is approximately constant under the measurement conditions, the magnitude of the heat exchanged is proportional to the mass and the size of the temperature change. With signs included, the relation is

$$
Q=mc\Delta T,\qquad \Delta T=T_f-T_i.
$$

The specific heat capacity is the energy needed for one kilogram to warm by one kelvin, expressed in $\mathrm{J/(kg\,K)}$. Since $m>0$ and $c>0$ for the materials considered, the sign of $Q$ follows that of $\Delta T$. For cooling, the calculation gives a negative number. Its magnitude is the heat released.
:::

:::esempio{titolo="The same energy in copper and water"}
Two samples, each of mass $0.50\,\mathrm{kg}$, separately absorb $2100\,\mathrm J$. Use $c=4200\,\mathrm{J/(kg\,K)}$ for water and $c=400\,\mathrm{J/(kg\,K)}$ for copper. Both stay in the same phase.

$$
\Delta T_{\mathrm{H_2O}}=\frac{2100}{0.50\cdot4200}\,\mathrm K=1.0\,\mathrm K,\qquad \Delta T_{\mathrm{Cu}}=\frac{2100}{0.50\cdot400}\,\mathrm K=10.5\,\mathrm K.
$$

With the same energy, the copper warms more because its heat capacity is smaller. In a graph of $Q$ against $\Delta T$, the line for water is steeper.

::grafico{f="2.1*x;0.2*x" legenda="\mathrm{H_2O};\mathrm{Cu}" punti="1,2.1,pieno;10.5,2.1,pieno" xmin=0 xmax=12 ymin=0 ymax=4 nomi="ΔT (K),Q (kJ)" titolo="The two points at the same height correspond to 2.1 kJ. Their horizontal coordinates differ."}
:::

:::esempio{titolo="Warming and cooling the same sample"}
A sample of mass $0.30\,\mathrm{kg}$ has specific heat capacity $900\,\mathrm{J/(kg\,K)}$ and remains in the same phase. Its heat capacity is $270\,\mathrm{J/K}$. Going from $10$ to $40\,{}^\circ\mathrm C$ gives a change of $+30\,\mathrm K$, so the heat absorbed is $+8100\,\mathrm J$. Returning to the initial conditions gives a change of $-30\,\mathrm K$ and heat transfer of $-8100\,\mathrm J$ in the model with the same specific heat capacity and no other energy transfers.

The warming can also be split at $25\,{}^\circ\mathrm C$. Each interval spans $15\,\mathrm K$, so each contribution is $4050\,\mathrm J$. Their sum gives $8100\,\mathrm J$ because the heat capacity is the same in both intervals. If experimental data show different slopes on the heat-versus-temperature graph, it is better to use separate capacities for the two intervals.
:::

## Heat capacity

:::definizione{#capacita titolo="The thermal response of the whole object"}
The **heat capacity** $C$ is the energy absorbed by the whole object for each kelvin of increase under the stated conditions. For a homogeneous sample of mass $m$, multiply the specific heat capacity by the mass.

$$
C=mc,\qquad Q=C\Delta T.
$$

For two parts already in equilibrium that warm together by $\Delta T$, the total energy is $(C_1+C_2)\Delta T$. Add the heat capacities only for parts undergoing the same change. A heat capacity in $\mathrm{J/K}$ corresponds to the slope of a graph with $Q$ on the vertical axis and $\Delta T$ on the horizontal axis.
:::

:::esempio{titolo="Separating the sample from the container"}
For a $0.40\,\mathrm{kg}$ mass in a container, the measured slope is $500\,\mathrm{J/K}$. The empty container has heat capacity $80\,\mathrm{J/K}$. The sample heat capacity is $420\,\mathrm{J/K}$, so $c=\dfrac{420}{0.40}\,\mathrm{J/(kg\,K)}=1050\,\mathrm{J/(kg\,K)}$. Assigning the entire slope to the sample would overestimate its value.

::grafico{f="0.5*x;0.42*x;0.08*x" punti="10,5,pieno;10,4.2,pieno;10,0.8,pieno" xmin=0 xmax=12 ymin=0 ymax=7 nomi="ΔT (K),Q (kJ)" legenda="\mathrm{total};\mathrm{sample};\mathrm{container}" titolo="For an increase of 10 K the sample absorbs 4.2 kJ and the container 0.8 kJ."}
:::

:::esempio{#pendenze-calorimetro titolo="Isolating specific heat capacity with two masses"}
A container is used to heat two different masses of the same material. In each run the sample and the container are at the same temperature and power lost to the surroundings can be neglected. As a function of their common temperature rise, the heat input has slope $C_{\mathrm{tot}}=C_{\mathrm{rec}}+mc$. With $m_1=0.20\,\mathrm{kg}$ the slope is $120\,\mathrm{J/K}$, while with $m_2=0.60\,\mathrm{kg}$ it is $280\,\mathrm{J/K}$.

Subtracting the measurements eliminates the container term because it is the same in both runs.

$$
\begin{aligned}
c&=\frac{280-120}{0.60-0.20}\,\mathrm{J/(kg\,K)}=400\,\mathrm{J/(kg\,K)}\\[6pt]
C_{\mathrm{rec}}&=(120-0.20\cdot 400)\,\mathrm{J/K}=40\,\mathrm{J/K}.
\end{aligned}
$$

In the second run the container and sample together give $40+0.60\cdot400=280\,\mathrm{J/K}$, as required. With just one run the total heat capacity is identifiable. To separate it into its two parts, one heat capacity or an independent measurement is needed.

::grafico{f="120*x;280*x" punti="10,1200,pieno;10,2800,pieno" xmin=0 xmax=12 ymin=0 ymax=3500 nomi="ΔT (K),Q (J)" legenda="0.20\,\mathrm{kg};0.60\,\mathrm{kg}" titolo="Each slope includes the sample and the container. Subtracting the slopes isolates the contribution of the additional 0.40 kg."}
:::

## Thermal equilibrium

::::teorema{#equilibrio titolo="Energy balance in an insulated system"}
Let $T_{1,i}$ and $T_{2,i}$ be the initial temperatures of two objects of positive heat capacities $C_1$ and $C_2$. The system is insulated, the objects remain in the same phase and heat is the only internal transfer. At equilibrium temperature $T_f$, the balance gives

$$
T_f=\frac{C_1T_{1,i}+C_2T_{2,i}}{C_1+C_2}.
$$

The final temperature is a weighted mean between the two initial readings. The object of greater heat capacity has the greater weight. Equal heat capacities give the arithmetic mean.

:::dimostrazione
By energy conservation $Q_1+Q_2=0$. Substituting the two contributions gives $C_1(T_f-T_{1,i})+C_2(T_f-T_{2,i})=0$. Factor out $T_f$ and divide by $C_1+C_2>0$. The weights $\dfrac{C_1}{C_1+C_2}$ and $\dfrac{C_2}{C_1+C_2}$ are positive and add to one.
:::
::::

:::esempio{titolo="Reading the two heat values"}
Mix $0.25\,\mathrm{kg}$ of water at $60\,{}^\circ\mathrm C$ and $0.75\,\mathrm{kg}$ at $20\,{}^\circ\mathrm C$. Neglecting the container and heat exchange with the surroundings, $T_f=30\,{}^\circ\mathrm C$. Dividing by the common specific heat capacity gives $Q_1/c=0.25(30-60)\,\mathrm{kg\,K}=-7.5\,\mathrm{kg\,K}$ and $Q_2/c=0.75(30-20)\,\mathrm{kg\,K}=+7.5\,\mathrm{kg\,K}$. The signs show that the first part releases exactly what the second part absorbs.

::grafico{curve="t,0.25*(60-t),20,60;t,0.75*(t-20),20,60" punti="30,7.5,pieno,E" xmin=20 xmax=68 ymin=0 ymax=32 nomi="Final T (°C),|Q|/c (kg K)" legenda="\mathrm{released};\mathrm{absorbed}" titolo="The intersection shows the temperature at which the two heat transfers have equal magnitudes."}
:::

:::teorema{#bilancio-aperto titolo="When the temperature average applies"}
The equilibrium temperature is a weighted mean when heat is exchanged only within the system, all components remain in the same phase and each reaches a common final temperature. If energy is supplied from outside and other contributions to the balance are negligible, the sum of the terms $C_j(T_f-T_{j,i})$ is the net energy supplied from outside, $E_{\mathrm{est}}$. The result differs from the weighted mean by $\dfrac{E_{\mathrm{est}}}{\sum_j C_j}$. The heat capacities must be positive and are taken to be constant over the stated intervals.

For two heat capacities of $160\,\mathrm{J/K}$ and $640\,\mathrm{J/K}$ at $70$ and $20\,{}^\circ\mathrm C$, the weighted mean is $30\,{}^\circ\mathrm C$. If $4000\,\mathrm J$ is supplied from outside during the process, the additional term is $5\,\mathrm K$ and $T_f=35\,{}^\circ\mathrm C$. The initially hot object releases $5600\,\mathrm J$. The initially cool object absorbs $9600\,\mathrm J$, so the sum of the two contributions is $+4000\,\mathrm J$.

The table compares three trials with the same initial conditions. A net loss of energy lowers the final temperature by five kelvin and makes the hot body release more energy.

| Net energy | Final temperature | Hot body's contribution |
| --- | --- | --- |
| $-4\,\mathrm{kJ}$ | $25\,{}^\circ\mathrm C$ | $-7.2\,\mathrm{kJ}$ |
| $0\,\mathrm{kJ}$ | $30\,{}^\circ\mathrm C$ | $-6.4\,\mathrm{kJ}$ |
| $+4\,\mathrm{kJ}$ | $35\,{}^\circ\mathrm C$ | $-5.6\,\mathrm{kJ}$ |

::grafico{linee="20,-8 45,12" punti="25,-4,pieno;30,0,pieno;35,4,pieno" xmin=19 xmax=46 ymin=-9 ymax=13 nomi="Final T (°C),Net energy (kJ)" titolo="The horizontal intercept gives the isolated equilibrium at 30 °C. Reaching 35 °C takes a net input of 4 kJ."}
:::

## Calorimeters and heating power

:::osservazione{#riscaldamento titolo="Including all bodies that absorb energy"}
If the calorimeter has significant heat capacity, include $C_{\mathrm{cal}}(T_f-T_{\mathrm{cal},i})$ in the balance. If it was in equilibrium with the cold liquid, the term has the same temperature interval as the cold liquid, and the two heat capacities can be added. If its initial temperature differed, write a third term.
:::

:::definizione{#potenza-utile titolo="From power to time"}
**Power** is energy transferred per unit time. If the electrical input is constant and equal to $P$ and the efficiency is $\eta$, the useful power is $\eta P$. The time for useful energy transfer $Q$ is

$$
t=\frac{Q}{\eta P}.
$$

A $600\,\mathrm W$ heater with efficiency $0.75$ transfers $450\,\mathrm J$ to the body per second. Absorbing $18\,\mathrm{kJ}$ takes $40\,\mathrm s$. If the efficiency changed during heating, a constant useful-power model would require an appropriate estimate over the interval.

::grafico{f="0.6*x;0.45*x" punti="40,24,pieno;40,18,pieno" xmin=0 xmax=50 ymin=0 ymax=31 nomi="t (s),E (kJ)" legenda="\mathrm{input};\mathrm{useful}" titolo="In 40 s there are 24 kJ of input, of which 18 kJ reaches the body."}
:::

:::esempio{#potenze-a-tratti titolo="Useful power over two intervals"}
A heater runs for $40\,\mathrm s$ at $200\,\mathrm W$ with efficiency $0.70$, then for $20\,\mathrm s$ at $350\,\mathrm W$ with efficiency $0.80$. Useful power is constant within each interval. Multiply it by the duration of that interval separately.

$$
\begin{aligned}
E_1&=0.70\cdot200\cdot40\,\mathrm J=5600\,\mathrm J\\[6pt]
E_2&=0.80\cdot350\cdot20\,\mathrm J=5600\,\mathrm J.
\end{aligned}
$$

The two intervals supply equal amounts of energy to the body because the second has double the useful power and half the duration. If the heat capacity is $560\,\mathrm{J/K}$ and already includes everything that heats up, the temperature increases by $\dfrac{11200}{560}\,\mathrm K=20\,\mathrm K$. Compare input and useful energy by summing their separate balances. The total input is $8000+7000=15000\,\mathrm J$. The overall efficiency is therefore $\dfrac{11200}{15000}\simeq0.747$. Weight the efficiency of each interval by the input energy supplied in that interval.

::grafico{linee="0,140 40,140;40,280 60,280" segmenti="40,140,40,280" poligoni="0,0 40,0 40,140 0,140;40,0 60,0 60,280 40,280" xmin=0 xmax=65 ymin=0 ymax=320 nomi="t (s),useful power (W)" titolo="The rectangles with widths of 40 s and 20 s have the same area. Each area represents 5.6 kJ transferred to the body."}
:::

:::osservazione{#limite-riscaldamento titolo="Limiting temperature with heat loss"}
A body can continue to receive electrical energy while its temperature stays constant. This happens when the input power equals the rate of heat loss to the surroundings. Consider a sample that receives $240\,\mathrm W$. Each kelvin above the ambient temperature of $20\,{}^\circ\mathrm C$ adds $8\,\mathrm W$ to the rate of heat loss to the air. At $40\,{}^\circ\mathrm C$ the sample loses $160\,\mathrm W$, so its energy continues to increase. At $50\,{}^\circ\mathrm C$ it loses $240\,\mathrm W$ and the net power is zero.

A slightly higher temperature would raise the losses above the input power. The temperature would then start to fall. The model describes the steady state of the apparatus and helps determine whether a target temperature is attainable.

::grafico{f="240;8*(x-20)" punti="50,240,pieno,E" xmin=20 xmax=61 ymin=0 ymax=330 nomi="T (°C),P (W)" legenda="P_{in};P_{disp}" titolo="Heat loss matches input power at 50 °C. To the left of the intersection, the body warms."}
:::

## Conduction, convection and radiation

:::definizione{#trasmissione titolo="Three ways to transfer energy"}
In **conduction**, energy passes through a material through interactions between its parts. In **convection**, fluid motion transports matter and energy. In **radiation**, energy is carried by electromagnetic waves, which also travel through a vacuum. A wall may conduct energy while fluid near its faces exchanges energy by convection.
:::

:::teorema{#parete titolo="Power through a flat wall"}
Consider a uniform wall of thickness $d$, area $A$ and approximately constant conductivity $k$. Its two faces are held at uniform fixed temperatures. In steady state, neglecting losses at the edges, the magnitude of the conducted power is

$$
P=\frac{kA(T_{\mathrm{calda}}-T_{\mathrm{fredda}})}{d}.
$$

The thickness is the distance over which temperature falls. For the same temperature difference, doubling the thickness halves the slope and the power. For $k=0.04\,\mathrm{W/(m\,K)}$, $A=5\,\mathrm{m^2}$, $d=0.10\,\mathrm m$ and a difference of $20\,\mathrm K$, the model gives $P=40\,\mathrm W$.

::grafico{linee="0,25 10,5" punti="0,25,pieno;10,5,pieno" xmin=0 xmax=11 ymin=0 ymax=30 nomi="x (cm),T (°C)" titolo="Linear profile for a 10 cm wall, between 25 °C and 5 °C."}
:::

:::osservazione{#resistenza-termica titolo="Layers in series"}
The ratio of temperature difference to power is the thermal resistance $R=\dfrac{d}{kA}$. For layers in contact with the same area, steady-state power is the same through each layer. The total temperature difference is the sum of the differences across the layers, so the resistances add. With $R_1=0.25\,\mathrm{K/W}$ and $R_2=0.75\,\mathrm{K/W}$, a total difference of $20\,\mathrm K$ gives $20\,\mathrm W$. The drops in the two layers are $5\,\mathrm K$ and $15\,\mathrm K$.

::grafico{linee="0,25 4,20 9,5" punti="4,20,pieno,I" xmin=0 xmax=10 ymin=0 ymax=30 nomi="x (cm),T (°C)" titolo="With thicknesses of 4 and 5 cm, I is the interface at 20 °C."}
:::

:::osservazione{#vie-termiche-parallele titolo="Two parallel paths for heat"}
A wall made of two side-by-side sections provides two paths for heat to flow. If the faces of both sections are at the same two temperatures and lateral conduction at their common edge is neglected, the temperature difference $\Delta T$ is common to both. For resistances $R_1$ and $R_2$ the powers are $\dfrac{\Delta T}{R_1}$ and $\dfrac{\Delta T}{R_2}$. Add these powers to find the total heat loss rate. The corresponding resistance is the reciprocal of $\dfrac{1}{R_1}+\dfrac{1}{R_2}$.

With $\Delta T=18\,\mathrm K$, $R_1=0.60\,\mathrm{K/W}$ and $R_2=1.80\,\mathrm{K/W}$, the first path transfers $30\,\mathrm W$ and the second $10\,\mathrm W$. The total is $40\,\mathrm W$, so the equivalent resistance is $\dfrac{18}{40}\,\mathrm{K/W}=0.45\,\mathrm{K/W}$. This is smaller than either resistance because heat can take two paths for the same temperature difference. In successive layers, by comparison, the power is common and the temperature drops add.
:::

:::esempio{#temperatura-interfaccia titolo="Reversing the wall layers"}
Two layers are in contact and the area through which heat flows is constant. The outer face temperatures are $24\,{}^\circ\mathrm C$ and $-6\,{}^\circ\mathrm C$. The first layer has resistance $0.20\,\mathrm{K/W}$ and the second $1.30\,\mathrm{K/W}$. In steady state without lateral losses, add the resistances because the same energy passes through both layers each second. The power is $\dfrac{30}{1.50}\,\mathrm W=20\,\mathrm W$. From the hot face to the contact surface the temperature drops by $20\cdot0.20=4\,\mathrm K$, leaving the interface at $20\,{}^\circ\mathrm C$.

Reversing the order gives the same power because the total resistance and the endpoint temperatures stay the same. The temperature drop across the first layer becomes $20\cdot1.30=26\,\mathrm K$ and the interface reaches $-2\,{}^\circ\mathrm C$. An interface measurement can therefore distinguish two walls transferring heat to the outside at the same rate. The calculation presumes fixed face temperatures and applies once steady state is reached. While the wall itself cools, the two layers may store or release energy at different rates.

If the layers are $4\,\mathrm{cm}$ and $7\,\mathrm{cm}$ thick respectively, the contact moves when the first layer changes. The two profiles have the same endpoint temperatures, while the position and temperature of the interface change.

::grafico{linee="0,24 4,20 11,-6" segmenti="0,24,7,-2;7,-2,11,-6" punti="4,20,pieno,A;7,-2,pieno,B" xmin=0 xmax=12 ymin=-11 ymax=28 nomi="x (cm),T (°C)" titolo="The solid line reaches interface A at 20 °C. In the reverse order, the dashed line reaches interface B at −2 °C."}
:::
