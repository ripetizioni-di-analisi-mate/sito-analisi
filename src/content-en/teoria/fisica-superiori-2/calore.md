---
titolo: "Heat and calorimetry"
sommario: "Specific heat capacity, heat capacity, equilibrium, power and heat transfer."
---

## Heat and temperature

:::definizione{#calore titolo="Energy transferred due to a temperature difference"}
**Heat** is the energy that passes from one object to another because the two objects are at different temperatures. Heat passes from the hotter object to the colder one. It is denoted by $Q$ and measured in joules ($\mathrm J$), the unit of energy in the International System of Units (SI). Two objects at the same temperature do not exchange heat, and they are said to be in **thermal equilibrium**.

The **system** is the object, or the group of objects, chosen for study. The **energy balance** of the system is the account of the energy that enters and the energy that leaves. In the balance one writes $Q>0$ if the system receives energy as heat and $Q<0$ if it gives it out. The words *absorbed* and *released* indicate which object the balance refers to.
:::

:::osservazione{titolo="Sign of heat in the balance"}
A warm cup placed on a cooler saucer gives energy to it. For the cup the transfer is negative, because the cup loses energy. For the saucer the same transfer is positive, because the saucer receives energy. If the system is the cup and saucer together, the transfer takes place inside it and does not change the total energy. Transfers to the air, however, cross the boundary of the combined system, that is, the surface that separates it from what lies outside.
:::

:::osservazione{#confine-termico titolo="Choosing the system boundary"}
The **boundary** of the system is the surface that separates the system from everything else, which is called the **surroundings**. If the system is just the water in a cup, both the cup and the air lie outside the boundary. As the water warms, part of the energy supplied to the cup and water together stays in the cup, so the measurement of the energy supplied to the combination is not enough to tell how much energy the water received.

If the system is the cup and water together, the exchange between cup and water is internal and does not appear in the balance. The balance instead includes:
- the exchanges with the air;
- the energy supplied by any heater;
- any other energy that crosses the chosen boundary.

For this reason the system is named before the balance is written, so that each contribution is assigned to the right object.

Two different procedures can bring the same water to the same final temperature.
- The water warms in a hotter vessel. In this case it receives energy as heat, because of the temperature difference.
- The water warms in an **insulated** vessel, that is, one that does not exchange heat with the outside, while a stirrer mixes it for a long time. In this case it receives energy as **work**, that is, through the force the stirrer exerts while it moves.

The temperature change can therefore be the same, while the way the energy arrived is different. Hence the heat exchanged is found from the temperature change only when the problem states the other contributions, for example by saying that they are negligible.
:::

## Specific heat capacity

:::teorema{#specifico titolo="Heating without a change of phase"}
An object of mass $m$ stays in the same **phase**, that is, it remains solid, liquid or gas, and changes temperature only because it exchanges heat. The heat needed is **proportional** to the mass, that is, double the mass requires double the heat. It is also proportional to the temperature change, so double the rise requires double the heat. Finally, it depends on the material. With signs included, the relation is

$$
Q=mc\Delta T,\qquad \Delta T=T_f-T_i.
$$

The Greek letter $\Delta$ (*delta*) indicates a change, that is, the final value minus the initial value. Here $T_i$ is the initial temperature and $T_f$ the final one. A change of $1\,{}^\circ\mathrm C$ (degree Celsius) is equal to a change of $1\,\mathrm K$ (kelvin), so $\Delta T$ has the same value in the two units. From $10\,{}^\circ\mathrm C$ to $40\,{}^\circ\mathrm C$ one has $\Delta T=(40-10)\,\mathrm K=30\,\mathrm K$.

The number $c$ is the **specific heat capacity** of the material. It is the energy needed to raise the temperature of one kilogram of that material by one kelvin, and it is measured in $\mathrm{J/(kg\,K)}$, *joules per kilogram per kelvin*. The relation holds when $c$ is approximately constant over the temperature range considered.

Since $m>0$ and $c>0$ for the materials considered, the sign of $Q$ is the sign of $\Delta T$.
- If the object warms, $\Delta T>0$ and $Q>0$, that is, the heat is absorbed.
- If the object cools, $\Delta T<0$ and the calculation gives a negative number. The **magnitude** $|Q|$, that is, the value without its sign, is the heat released.

During a change of state, such as ice melting or water boiling, the object absorbs heat while its temperature stays constant. Therefore the relation $Q=mc\Delta T$ does not apply in that stretch. These cases are studied in the chapter on changes of state, with latent heat.
:::

:::esempio{titolo="The same energy in copper and water"}
Two samples, that is, two portions of material, each have mass $0.50\,\mathrm{kg}$ and separately absorb $2100\,\mathrm J$. One is water, with chemical symbol $\mathrm{H_2O}$ and $c=4200\,\mathrm{J/(kg\,K)}$. The other is copper, with symbol $\mathrm{Cu}$ and $c=400\,\mathrm{J/(kg\,K)}$. Both stay in the same phase. Dividing both sides of $Q=mc\Delta T$ by $mc$ gives $\Delta T=\dfrac{Q}{mc}$, so

$$
\Delta T_{\mathrm{H_2O}}=\frac{2100}{0.50\cdot4200}\,\mathrm K=\frac{2100}{2100}\,\mathrm K=1.0\,\mathrm K,\qquad \Delta T_{\mathrm{Cu}}=\frac{2100}{0.50\cdot400}\,\mathrm K=\frac{2100}{200}\,\mathrm K=10.5\,\mathrm K.
$$

With the same energy the copper warms more, because each kelvin of rise requires $200\,\mathrm J$ for the copper and $2100\,\mathrm J$ for the water. In the graph of $Q$ in kilojoules ($1\,\mathrm{kJ}=1000\,\mathrm J$) against $\Delta T$, each material is a straight line through the origin, and the line for water is the steeper one.

::grafico{f="2.1*x;0.2*x" legenda="\mathrm{H_2O};\mathrm{Cu}" punti="1,2.1,pieno;10.5,2.1,pieno" xmin=0 xmax=12 ymin=0 ymax=4 nomi="ΔT (K),Q (kJ)" titolo="The two points at the same height correspond to 2.1 kJ. Their horizontal coordinates differ."}
:::

:::esempio{titolo="Warming and cooling the same sample"}
A sample of mass $0.30\,\mathrm{kg}$ has specific heat capacity $900\,\mathrm{J/(kg\,K)}$ and remains in the same phase. Each kelvin of rise requires $0.30\cdot900=270\,\mathrm J$.
- If it goes from $10$ to $40\,{}^\circ\mathrm C$, the change is $+30\,\mathrm K$ and the heat absorbed is $270\cdot30=+8100\,\mathrm J$.
- If it returns from $40$ to $10\,{}^\circ\mathrm C$, the change is $-30\,\mathrm K$ and the heat is $270\cdot(-30)=-8100\,\mathrm J$.

The second result holds if the specific heat capacity is the same and there are no other energy transfers.

The warming can also be split into two stretches, from $10$ to $25\,{}^\circ\mathrm C$ and from $25$ to $40\,{}^\circ\mathrm C$. Each stretch spans $15\,\mathrm K$, so each contribution is $270\cdot15=4050\,\mathrm J$. The sum $4050+4050$ gives back $8100\,\mathrm J$, because in both stretches each kelvin requires the same $270\,\mathrm J$. The **slope** of a straight line is how much the line rises for each unit of horizontal movement. If the measurements show that the graph of heat against temperature has different slopes in the two stretches, each stretch is treated with its own number of joules per kelvin.
:::

## Heat capacity

:::definizione{#capacita titolo="The thermal response of the whole object"}
The **heat capacity** $C$ of an object is the energy the whole object absorbs for each kelvin of temperature rise, under the stated conditions. It is measured in $\mathrm{J/K}$, *joules per kelvin*. For a **homogeneous** object, that is, one made of the same material at every point, of mass $m$, the heat capacity is the specific heat capacity multiplied by the mass. Replacing the product $mc$ with $C$ in the heat relation gives the second equation.

$$
C=mc,\qquad Q=C\Delta T.
$$

Two parts already in equilibrium, that is, at the same temperature, warm together by $\Delta T$. The total energy is $C_1\Delta T+C_2\Delta T$, and factoring out $\Delta T$ gives $(C_1+C_2)\Delta T$. The heat capacities add only for parts that undergo the same temperature change.

In a graph with $Q$ on the vertical axis and $\Delta T$ on the horizontal axis, an object is represented by a straight line through the origin. Its slope, that is, the increase in $Q$ when $\Delta T$ increases by $1\,\mathrm K$, is the heat capacity in $\mathrm{J/K}$. If the axes are swapped, with $\Delta T$ vertical and $Q$ horizontal, the slope is $\dfrac1C$ and is measured in $\mathrm{K/J}$.
:::

:::esempio{titolo="Separating the sample from the container"}
A $0.40\,\mathrm{kg}$ mass warms together with its container. The measured graph of $Q$ against $\Delta T$ has slope $500\,\mathrm{J/K}$, which is the heat capacity of sample and container together. The container alone has heat capacity $80\,\mathrm{J/K}$. The sample heat capacity is therefore $(500-80)\,\mathrm{J/K}=420\,\mathrm{J/K}$. Dividing by the mass gives $c=\dfrac{420}{0.40}\,\mathrm{J/(kg\,K)}=1050\,\mathrm{J/(kg\,K)}$. Assigning the whole slope to the sample would give $\dfrac{500}{0.40}\,\mathrm{J/(kg\,K)}=1250\,\mathrm{J/(kg\,K)}$, a value that is too large.

::grafico{f="0.5*x;0.42*x;0.08*x" punti="10,5,pieno;10,4.2,pieno;10,0.8,pieno" xmin=0 xmax=12 ymin=0 ymax=7 nomi="ΔT (K),Q (kJ)" legenda="\mathrm{total};\mathrm{sample};\mathrm{container}" titolo="For an increase of 10 K the sample absorbs 4.2 kJ and the container 0.8 kJ."}
:::

:::esempio{#pendenze-calorimetro titolo="Isolating specific heat capacity with two masses"}
The same container is used, in two runs, to heat two different masses of the same material. In each run the mass and the container always have the same temperature. The **power lost**, that is, the energy that goes to the air each second, is negligible, that is, so small that it can be ignored. The graph of the heat input against the common temperature rise has as its slope the heat capacity of the combination. This is the sum of the container heat capacity $C_{\mathrm{rec}}$ and the sample heat capacity $mc$, $C_{\mathrm{tot}}=C_{\mathrm{rec}}+mc$.
- With $m_1=0.20\,\mathrm{kg}$ the slope is $120\,\mathrm{J/K}$.
- With $m_2=0.60\,\mathrm{kg}$ the slope is $280\,\mathrm{J/K}$.

From the first run to the second the mass increases by $(0.60-0.20)\,\mathrm{kg}=0.40\,\mathrm{kg}$ and the slope increases by $(280-120)\,\mathrm{J/K}=160\,\mathrm{J/K}$. The container term is the same in both runs, so the subtraction eliminates it and the increase in slope is due only to the added mass. Then $C_{\mathrm{rec}}$ is found from the first run, by subtracting the sample heat capacity from the slope.

$$
\begin{aligned}
c&=\frac{280-120}{0.60-0.20}\,\mathrm{J/(kg\,K)}=\frac{160}{0.40}\,\mathrm{J/(kg\,K)}=400\,\mathrm{J/(kg\,K)}\\[6pt]
C_{\mathrm{rec}}&=(120-0.20\cdot 400)\,\mathrm{J/K}=(120-80)\,\mathrm{J/K}=40\,\mathrm{J/K}.
\end{aligned}
$$

In the second run the container and sample together give $(40+0.60\cdot400)\,\mathrm{J/K}=(40+240)\,\mathrm{J/K}=280\,\mathrm{J/K}$, as measured. With just one run only the total heat capacity can be found. To split it between container and sample, one of the two heat capacities must be known or an independent measurement must be made.

::grafico{f="120*x;280*x" punti="10,1200,pieno;10,2800,pieno" xmin=0 xmax=12 ymin=0 ymax=3500 nomi="ΔT (K),Q (J)" legenda="0.20\,\mathrm{kg};0.60\,\mathrm{kg}" titolo="Each slope includes the sample and the container. Subtracting the slopes isolates the contribution of the additional 0.40 kg."}
:::

## Thermal equilibrium

::::teorema{#equilibrio titolo="Energy balance in an insulated system"}
Two objects at different temperatures placed in contact exchange heat until they reach a common temperature $T_f$, called the **equilibrium temperature**. Object 1 has heat capacity $C_1>0$ and initial temperature $T_{1,i}$. Object 2 has heat capacity $C_2>0$ and initial temperature $T_{2,i}$; in the subscripts, $i$ stands for *initial*. There are three hypotheses:
- the system is insulated, that is, it does not exchange energy with the outside;
- the objects remain in the same phase;
- the only transfers between the objects are heat transfers.

Then the balance gives

$$
T_f=\frac{C_1T_{1,i}+C_2T_{2,i}}{C_1+C_2}.
$$

This is a **weighted mean**, that is, a mean in which each value counts in proportion to its weight, which here is the heat capacity of the object. Therefore $T_f$ lies between the two initial temperatures and is closer to that of the object with the greater heat capacity. If the heat capacities are equal, the result is the arithmetic mean $\dfrac{T_{1,i}+T_{2,i}}{2}$. If the objects are made of the same substance, one substitutes $C=mc$ and the specific heat capacity cancels, so the weights are the masses. With three or more objects, one term per object is added to the numerator and to the denominator.

:::dimostrazione
The system is insulated, so the total energy does not change and the heat released by one object is absorbed by the other. In symbols, $Q_1+Q_2=0$. Substituting $Q_1=C_1(T_f-T_{1,i})$ and $Q_2=C_2(T_f-T_{2,i})$ gives

$$
C_1(T_f-T_{1,i})+C_2(T_f-T_{2,i})=0.
$$

By the distributive property $C_1(T_f-T_{1,i})=C_1T_f-C_1T_{1,i}$, and the same holds for the second term. The terms without $T_f$ are then moved to the right-hand side, changing their sign:

$$
C_1T_f+C_2T_f=C_1T_{1,i}+C_2T_{2,i}.
$$

Factoring out $T_f$ on the left gives $(C_1+C_2)T_f$, and one divides by $C_1+C_2$, which is positive and therefore not zero. The weights $\dfrac{C_1}{C_1+C_2}$ and $\dfrac{C_2}{C_1+C_2}$ are positive and their sum is $\dfrac{C_1+C_2}{C_1+C_2}=1$. Therefore $T_f$ lies between the two initial temperatures.
:::
::::

:::esempio{titolo="Reading the two heat values"}
$0.25\,\mathrm{kg}$ of water at $60\,{}^\circ\mathrm C$ and $0.75\,\mathrm{kg}$ of water at $20\,{}^\circ\mathrm C$ are mixed, neglecting the container and heat exchange with the surroundings. The substance is the same, so the weights are the masses:

$$
T_f=\frac{0.25\cdot60+0.75\cdot20}{0.25+0.75}\,{}^\circ\mathrm C=\frac{15+15}{1.00}\,{}^\circ\mathrm C=30\,{}^\circ\mathrm C.
$$

The specific heat capacity is common, so the two heat values can be compared even without knowing it, by dividing each by $c$. This gives $\dfrac{Q_1}{c}=0.25\cdot(30-60)\,\mathrm{kg\,K}=-7.5\,\mathrm{kg\,K}$ and $\dfrac{Q_2}{c}=0.75\cdot(30-20)\,\mathrm{kg\,K}=+7.5\,\mathrm{kg\,K}$. The two results have the same magnitude and opposite signs, so the hot water releases exactly the energy that the cold water absorbs.

In the graph, for any final temperature $T$, the curves $0.25\,(60-T)$ and $0.75\,(T-20)$ meet at point $E$, at $30\,{}^\circ\mathrm C$.

::grafico{curve="t,0.25*(60-t),20,60;t,0.75*(t-20),20,60" punti="30,7.5,pieno,E" xmin=20 xmax=68 ymin=0 ymax=32 nomi="Final T (°C),|Q|/c (kg K)" legenda="\mathrm{released};\mathrm{absorbed}" titolo="The intersection shows the temperature at which the two heat transfers have equal magnitudes."}
:::

:::teorema{#bilancio-aperto titolo="When the temperature average applies"}
The equilibrium temperature is the weighted mean of the initial temperatures when three conditions hold together:
- heat is exchanged only within the system;
- all parts remain in the same phase;
- each part reaches the same final temperature.

If instead energy reaches the system from outside and the other contributions to the balance are negligible, the sum of the heat values of the parts equals the **net** energy $E_{\mathrm{est}}$ received from outside, that is, the energy that entered minus the energy that left. With two parts one writes

$$
C_1(T_f-T_{1,i})+C_2(T_f-T_{2,i})=E_{\mathrm{est}}.
$$

Solving for $T_f$ with the same steps as in the insulated case gives the weighted mean plus the term $\dfrac{E_{\mathrm{est}}}{C_1+C_2}$:

$$
T_f=\frac{C_1T_{1,i}+C_2T_{2,i}}{C_1+C_2}+\frac{E_{\mathrm{est}}}{C_1+C_2}.
$$

With more parts the denominator is the sum of all the heat capacities, written $\sum_j C_j$; the Greek letter $\Sigma$ (capital *sigma*) indicates a sum. The heat capacities are positive and are taken to be constant over the stated intervals. If a heater supplies some energy and part of it goes to the surroundings, $E_{\mathrm{est}}$ is the difference between the two. For example, parts with total heat capacity $400\,\mathrm{J/K}$ that warm by $10\,\mathrm K$ receive $400\cdot10=4000\,\mathrm J$. If the heater supplied $5000\,\mathrm J$, the other $5000-4000=1000\,\mathrm J$ went to the surroundings.

Two heat capacities are considered, $160\,\mathrm{J/K}$ and $640\,\mathrm{J/K}$, at $70$ and at $20\,{}^\circ\mathrm C$. The weighted mean is $\dfrac{160\cdot70+640\cdot20}{800}\,{}^\circ\mathrm C=\dfrac{24000}{800}\,{}^\circ\mathrm C=30\,{}^\circ\mathrm C$. If $4000\,\mathrm J$ is supplied from outside during the process, the additional term is $\dfrac{4000}{800}\,\mathrm K=5\,\mathrm K$ and $T_f=35\,{}^\circ\mathrm C$. The initially hot object exchanges $160\cdot(35-70)\,\mathrm J=-5600\,\mathrm J$, that is, it releases $5600\,\mathrm J$. The initially cool object absorbs $640\cdot(35-20)\,\mathrm J=9600\,\mathrm J$. Therefore the sum of the two contributions is $-5600+9600=+4000\,\mathrm J$, equal to the energy supplied from outside.

The table compares three trials with the same heat capacities and the same initial temperatures. A net energy of $-4\,\mathrm{kJ}$ means that $4\,\mathrm{kJ}$ leaves the system. In that case the final temperature falls by five kelvin, from $30$ to $25\,{}^\circ\mathrm C$, and the hot body releases more energy.

| Net energy | Final temperature | Hot body's contribution |
| --- | --- | --- |
| $-4\,\mathrm{kJ}$ | $25\,{}^\circ\mathrm C$ | $-7.2\,\mathrm{kJ}$ |
| $0\,\mathrm{kJ}$ | $30\,{}^\circ\mathrm C$ | $-6.4\,\mathrm{kJ}$ |
| $+4\,\mathrm{kJ}$ | $35\,{}^\circ\mathrm C$ | $-5.6\,\mathrm{kJ}$ |

In the graph each trial is a point, and the three points lie on a straight line. The line crosses the horizontal axis at $30\,{}^\circ\mathrm C$, the equilibrium temperature with no exchange with the outside.

::grafico{linee="20,-8 45,12" punti="25,-4,pieno;30,0,pieno;35,4,pieno" xmin=19 xmax=46 ymin=-9 ymax=13 nomi="Final T (°C),Net energy (kJ)" titolo="The horizontal intercept gives the isolated equilibrium at 30 °C. Reaching 35 °C takes a net input of 4 kJ."}
:::

## Calorimeters and heating power

:::osservazione{#riscaldamento titolo="Including all bodies that absorb energy"}
A **calorimeter** is an insulated vessel in which objects are placed in contact to measure the heat they exchange. The walls of the calorimeter also warm or cool. If its heat capacity $C_{\mathrm{cal}}$ is not negligible, the balance includes the term $C_{\mathrm{cal}}(T_f-T_{\mathrm{cal},i})$, where $T_{\mathrm{cal},i}$ is the initial temperature of the calorimeter.
- If the calorimeter was in equilibrium with the cold liquid it contains, its term has the same temperature interval as the cold liquid. Therefore the two heat capacities can be added. With $0.20\,\mathrm{kg}$ of water, of heat capacity $0.20\cdot4200=840\,\mathrm{J/K}$, in a $160\,\mathrm{J/K}$ calorimeter, the cold side has heat capacity $(840+160)\,\mathrm{J/K}=1000\,\mathrm{J/K}$.
- If the calorimeter starts at a different temperature, a third term is written.

The heat capacity of a calorimeter is also expressed as an **equivalent mass of water**, that is, the mass of water with the same heat capacity. It is found from $m_{\mathrm{eq}}=\dfrac{C_{\mathrm{cal}}}{c_{\mathrm{water}}}$. For $C_{\mathrm{cal}}=420\,\mathrm{J/K}$ and $c_{\mathrm{water}}=4200\,\mathrm{J/(kg\,K)}$ this gives $m_{\mathrm{eq}}=0.10\,\mathrm{kg}$.
:::

:::definizione{#potenza-utile titolo="From power to time"}
**Power** is the energy transferred each second. It is measured in watts ($\mathrm W$), and $1\,\mathrm W=1\,\mathrm{J/s}$, that is, one joule per second. An electric heater draws a constant power $P$ from the mains, written on the appliance and called the **rated power**. Only part of this energy reaches the object being heated, while the rest goes to the surroundings. The **efficiency** $\eta$ (Greek letter *eta*) is the ratio of the energy that reaches the object to the energy drawn. It is a number between $0$ and $1$, often written as a percentage: $\eta=0.80$ is the same as $80\%$. The **useful power**, that is, the power that reaches the object, is therefore $\eta P$.

With constant useful power, in a time $t$ the object receives $Q=\eta Pt$. Dividing both sides by $\eta P$ gives the time needed to transfer $Q$:

$$
t=\frac{Q}{\eta P}.
$$

A $600\,\mathrm W$ heater with efficiency $0.75$ transfers $0.75\cdot600=450\,\mathrm J$ to the object each second. For the object to absorb $18\,\mathrm{kJ}=18000\,\mathrm J$ takes $\dfrac{18000}{450}\,\mathrm s=40\,\mathrm s$. In the same time the heater draws $600\cdot40=24000\,\mathrm J=24\,\mathrm{kJ}$ from the mains. If the efficiency changed during heating, the relation would be used with an efficiency value suited to each interval.

::grafico{f="0.6*x;0.45*x" punti="40,24,pieno;40,18,pieno" xmin=0 xmax=50 ymin=0 ymax=31 nomi="t (s),E (kJ)" legenda="\mathrm{input};\mathrm{useful}" titolo="In 40 s there are 24 kJ of input, of which 18 kJ reaches the body."}
:::

:::esempio{#potenze-a-tratti titolo="Useful power over two intervals"}
A heater runs for $40\,\mathrm s$ at $200\,\mathrm W$ with efficiency $0.70$, then for $20\,\mathrm s$ at $350\,\mathrm W$ with efficiency $0.80$. Within each interval the useful power is constant. The useful energy of each stretch is its useful power multiplied by its duration.

$$
\begin{aligned}
E_1&=0.70\cdot200\cdot40\,\mathrm J=140\cdot40\,\mathrm J=5600\,\mathrm J\\[6pt]
E_2&=0.80\cdot350\cdot20\,\mathrm J=280\cdot20\,\mathrm J=5600\,\mathrm J.
\end{aligned}
$$

The two stretches give the object the same contribution, because in the second phase the useful power is double ($280$ against $140\,\mathrm W$) and the duration is half ($20$ against $40\,\mathrm s$). The object receives $11200\,\mathrm J$ in total. If its heat capacity is $560\,\mathrm{J/K}$ and already includes everything that heats up, the temperature rises by $\dfrac{11200}{560}\,\mathrm K=20\,\mathrm K$.

The input energy is computed like the useful energy, stretch by stretch: $200\cdot40+350\cdot20=8000+7000=15000\,\mathrm J$. The overall efficiency is therefore $\dfrac{11200}{15000}\simeq0.747$, where the symbol $\simeq$ is read *approximately equal to*. This value is the mean of the two efficiencies weighted by the input energy of each stretch: $\dfrac{0.70\cdot8000+0.80\cdot7000}{15000}=\dfrac{11200}{15000}$.

In the graph of useful power against time each stretch is a rectangle, and its area, base times height, is the useful energy of that stretch.

::grafico{linee="0,140 40,140;40,280 60,280" segmenti="40,140,40,280" poligoni="0,0 40,0 40,140 0,140;40,0 60,0 60,280 40,280" xmin=0 xmax=65 ymin=0 ymax=320 nomi="t (s),useful power (W)" titolo="The rectangles with widths of 40 s and 20 s have the same area. Each area represents 5.6 kJ transferred to the body."}
:::

:::osservazione{#limite-riscaldamento titolo="Limiting temperature with heat loss"}
An object can keep receiving electrical energy while its temperature stays constant. This happens when the power it receives equals the power it gives to the surroundings, called the power lost. A sample receives $240\,\mathrm W$ and the surrounding air is at $20\,{}^\circ\mathrm C$. The sample gives $8\,\mathrm W$ to the air for each kelvin of difference between its temperature $T$ and that of the air, so the power lost is $8\,(T-20)\,\mathrm W$.
- At $40\,{}^\circ\mathrm C$ the sample loses $8\cdot20=160\,\mathrm W$, less than the $240\,\mathrm W$ it receives. So its energy keeps increasing and the temperature rises.
- At $50\,{}^\circ\mathrm C$ it loses $8\cdot30=240\,\mathrm W$. The net power is zero and the temperature stays constant.
- At a slightly higher temperature the losses would exceed the input power. Therefore the temperature would fall again.

The value $50\,{}^\circ\mathrm C$ comes from $8\,(T-20)=240$, that is, $T-20=30$. It is the **steady-state** temperature of the apparatus, the one at which the object settles, and it shows whether a target temperature can be reached. In the graph the two lines meet at point $E$, at $50\,{}^\circ\mathrm C$.

::grafico{f="240;8*(x-20)" punti="50,240,pieno,E" xmin=20 xmax=61 ymin=0 ymax=330 nomi="T (°C),P (W)" legenda="P_{in};P_{disp}" titolo="Heat loss matches input power at 50 °C. To the left of the intersection, the body warms."}
:::

## Conduction, convection and radiation

:::definizione{#trasmissione titolo="Three ways to transfer energy"}
- In **conduction** energy passes through a stationary material, because its hotter parts transfer it to the neighbouring colder parts. This is how the handle of a spoon in hot soup warms up.
- In **convection** a fluid, that is, a liquid or a gas, moves and carries matter and energy with it. This is how water heated at the bottom of a pan rises and colder water sinks.
- In **radiation** energy is carried by electromagnetic waves, such as light, which also travel through a vacuum. This is how the energy of the Sun reaches the Earth.

The three ways can act together. A wall, for example, conducts energy through its interior while the air near its faces exchanges energy by convection.
:::

:::teorema{#parete titolo="Power through a flat wall"}
Consider a flat homogeneous wall of thickness $d$ and area $A$. The **thermal conductivity** $k$ is a property of the material and is measured in $\mathrm{W/(m\,K)}$. It indicates how many watts pass through one square metre of a layer one metre thick when its faces differ by one kelvin. The hypotheses are as follows:
- $k$ is approximately constant;
- each face has the same temperature at all its points, and the two temperatures are held fixed;
- the wall is in **steady state**, that is, the temperatures inside it no longer change with time;
- losses at the edges are negligible.

Then the magnitude of the conducted power, that is, of the energy crossing the wall each second, is

$$
P=\frac{kA(T_{\mathrm{calda}}-T_{\mathrm{fredda}})}{d}.
$$

Inside the wall the temperature falls along a straight line from the hot face to the cold face. The temperature difference divided by the thickness, $\dfrac{T_{\mathrm{calda}}-T_{\mathrm{fredda}}}{d}$, is the magnitude of the **temperature gradient**, that is, the slope of that line, and it is measured in $\mathrm{K/m}$. The power is proportional to the area and to the temperature difference and is **inversely proportional** to the thickness, that is, double the thickness gives half the power. Indeed, for the same temperature difference, doubling the thickness halves the gradient.

For $k=0.04\,\mathrm{W/(m\,K)}$, $A=5\,\mathrm{m^2}$, $d=0.10\,\mathrm m$ and a difference of $20\,\mathrm K$ one obtains

$$
P=\frac{0.04\cdot5\cdot20}{0.10}\,\mathrm W=\frac{4}{0.10}\,\mathrm W=40\,\mathrm W.
$$

Dividing by the area gives the power crossing each square metre, $\dfrac{40}{5}=8\,\mathrm{W/m^2}$.

::grafico{linee="0,25 10,5" punti="0,25,pieno;10,5,pieno" xmin=0 xmax=11 ymin=0 ymax=30 nomi="x (cm),T (°C)" titolo="Linear profile for a 10 cm wall, between 25 °C and 5 °C."}
:::

:::osservazione{#resistenza-termica titolo="Layers in series"}
The wall relation can be written $P=\dfrac{T_{\mathrm{calda}}-T_{\mathrm{fredda}}}{R}$ with $R=\dfrac{d}{kA}$. The number $R$ is the **thermal resistance** of the layer; it is measured in $\mathrm{K/W}$ and indicates how many kelvin of difference are needed to make one watt pass. From this, the temperature drop across a layer is $\Delta T=PR$.

Two layers with the same area are **in series** when heat passes through them one after the other. In steady state the same power $P$ crosses each layer, because no layer stores energy. The total drop is the sum of the drops across the two layers, $PR_1+PR_2=P(R_1+R_2)$, so the resistances add. With $R_1=0.25\,\mathrm{K/W}$, $R_2=0.75\,\mathrm{K/W}$ and a total difference of $20\,\mathrm K$, one has $P=\dfrac{20}{0.25+0.75}\,\mathrm W=20\,\mathrm W$. The drops across the two layers are $20\cdot0.25=5\,\mathrm K$ and $20\cdot0.75=15\,\mathrm K$.

In the graph the layers are $4$ and $5\,\mathrm{cm}$ thick. The temperature falls from $25$ to $20\,{}^\circ\mathrm C$ in the first layer and from $20$ to $5\,{}^\circ\mathrm C$ in the second. Point $I$ is the **interface**, that is, the contact surface between the two layers.

::grafico{linee="0,25 4,20 9,5" punti="4,20,pieno,I" xmin=0 xmax=10 ymin=0 ymax=30 nomi="x (cm),T (°C)" titolo="With thicknesses of 4 and 5 cm, I is the interface at 20 °C."}
:::

:::osservazione{#vie-termiche-parallele titolo="Two parallel paths for heat"}
A wall made of two side-by-side sections offers heat two paths, called **in parallel**, because heat passes through one section or through the other. Suppose that the faces of both sections are at the same two temperatures and that lateral conduction between the sections is negligible. Then the temperature difference $\Delta T$ is the same for both paths.
- With resistances $R_1$ and $R_2$ the powers are $\dfrac{\Delta T}{R_1}$ and $\dfrac{\Delta T}{R_2}$.
- The total heat loss is the sum of the two powers.
- The equivalent resistance, that is, the resistance of a single wall that lets the same power through, is the reciprocal of $\dfrac{1}{R_1}+\dfrac{1}{R_2}$.

A section that conducts much more than the rest of the wall is called a **thermal bridge**.

With $\Delta T=18\,\mathrm K$, $R_1=0.60\,\mathrm{K/W}$ and $R_2=1.80\,\mathrm{K/W}$, the first path transfers $\dfrac{18}{0.60}=30\,\mathrm W$ and the second $\dfrac{18}{1.80}=10\,\mathrm W$. The total is $40\,\mathrm W$, so the equivalent resistance is $\dfrac{18}{40}\,\mathrm{K/W}=0.45\,\mathrm{K/W}$. It is smaller than either resistance, because for the same temperature difference heat has two paths available. By comparison, in layers in series the power is common and the temperature drops add, while in parallel the temperature difference is common and the powers add.
:::

:::esempio{#temperatura-interfaccia titolo="Reversing the wall layers"}
Two layers are in contact and the area through which heat flows is the same for both. The outer faces are at $24\,{}^\circ\mathrm C$ and at $-6\,{}^\circ\mathrm C$, so the total difference is $24-(-6)=30\,\mathrm K$. The first layer has resistance $0.20\,\mathrm{K/W}$ and the second $1.30\,\mathrm{K/W}$. In steady state without lateral losses the same energy passes through both layers each second, so the resistances add and the total resistance is $0.20+1.30=1.50\,\mathrm{K/W}$. The power is $\dfrac{30}{1.50}\,\mathrm W=20\,\mathrm W$. From the hot face to the contact surface the temperature drops by $20\cdot0.20=4\,\mathrm K$, so the interface is at $24-4=20\,{}^\circ\mathrm C$.

The order of the layers is now reversed. The total resistance and the temperatures of the outer faces do not change, so the power remains $20\,\mathrm W$. The first layer is now the $1.30\,\mathrm{K/W}$ one, so the drop across it becomes $20\cdot1.30=26\,\mathrm K$ and the interface reaches $24-26=-2\,{}^\circ\mathrm C$. Therefore a measurement of the interface temperature distinguishes two walls that transfer the same power to the outside. The calculation holds with fixed face temperatures and once steady state is reached. While the wall itself cools, the two layers may store or release energy at different rates.

The layers are $4\,\mathrm{cm}$ thick (resistance $0.20\,\mathrm{K/W}$) and $7\,\mathrm{cm}$ thick (resistance $1.30\,\mathrm{K/W}$), so reversing the order moves the interface from $4$ to $7\,\mathrm{cm}$. In the graph the two lines start and end at the same temperatures, while the position and temperature of the interface change.

::grafico{linee="0,24 4,20 11,-6" segmenti="0,24,7,-2;7,-2,11,-6" punti="4,20,pieno,A;7,-2,pieno,B" xmin=0 xmax=12 ymin=-11 ymax=28 nomi="x (cm),T (°C)" titolo="The solid line reaches interface A at 20 °C. In the reverse order, the dashed line reaches interface B at −2 °C."}
:::
