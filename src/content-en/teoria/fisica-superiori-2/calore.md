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

## Specific heat capacity

:::teorema{#specifico titolo="Heating without a change of phase"}
For a sample of mass $m$ that stays in one phase, the absorbed energy grows with the amount of material and with the temperature change. Over a range in which the **specific heat capacity** $c$ is approximately constant and under the stated measurement conditions, use the relation

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

## Thermal equilibrium

::::teorema{#equilibrio titolo="Energy balance in an insulated system"}
Let $T_{1,i}$ and $T_{2,i}$ be the initial temperatures of two objects of positive heat capacities $C_1$ and $C_2$. The system is insulated, the objects remain in the same phase and heat is the only internal transfer. At equilibrium temperature $T_f$, the balance gives

$$
T_f=\frac{C_1T_{1,i}+C_2T_{2,i}}{C_1+C_2}.
$$

The final temperature is a weighted mean between the two initial readings. The object of greater heat capacity has the greater weight. Equal heat capacities give the arithmetic mean.

:::dimostrazione
By energy conservation $Q_1+Q_2=0$. Substituting the two contributions gives $C_1(T_f-T_{1,i})+C_2(T_f-T_{2,i})=0$. Factor out $T_f$ and divide by $C_1+C_2>0$. The weights $C_1/(C_1+C_2)$ and $C_2/(C_1+C_2)$ are positive and add to one.
:::
::::

:::esempio{titolo="Reading the two heat values"}
Mix $0.25\,\mathrm{kg}$ of water at $60\,{}^\circ\mathrm C$ and $0.75\,\mathrm{kg}$ at $20\,{}^\circ\mathrm C$. Neglecting the container, $T_f=30\,{}^\circ\mathrm C$. The first contribution is $0.25c(30-60)=-7.5c$, the second is $0.75c(30-20)=7.5c$. Checking the signs confirms that the first part releases exactly what the second part absorbs.

::grafico{f="0.25*(60-x);0.75*(x-20)" punti="30,7.5,pieno,E" xmin=20 xmax=61 ymin=0 ymax=27 nomi="T_f (°C),|Q|/c" legenda="\mathrm{released};\mathrm{absorbed}" titolo="The intersection of the magnitudes identifies the balance of opposite-signed terms."}
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
The ratio of temperature difference to power is the thermal resistance $R=d/(kA)$. For layers in contact with the same area, steady-state power is the same through each layer. The total temperature difference is the sum of the differences across the layers, so the resistances add. With $R_1=0.25\,\mathrm{K/W}$ and $R_2=0.75\,\mathrm{K/W}$, a total difference of $20\,\mathrm K$ gives $20\,\mathrm W$. The drops in the two layers are $5\,\mathrm K$ and $15\,\mathrm K$.

::grafico{linee="0,25 4,20 9,5" punti="4,20,pieno,I" xmin=0 xmax=10 ymin=0 ymax=30 nomi="x (cm),T (°C)" titolo="With thicknesses of 4 and 5 cm, I is the interface at 20 °C."}
:::
