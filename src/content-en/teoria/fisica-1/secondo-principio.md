---
titolo: Second law, heat engines and entropy
sommario: How the second law limits the conversion of heat into work, why the Carnot cycle sets the maximum efficiency between two temperatures and how entropy measures the irreversibility of processes.
---

## Reversible and irreversible processes

:::definizione{#serbatoio-termico titolo="Thermal reservoir"}
A **thermal reservoir** (or heat source) is a system with a heat capacity so large that the heat exchanged with other bodies does not change its temperature appreciably. A reservoir is therefore described by a single quantity, its temperature $T$, which remains constant. The atmosphere, a lake, the boiler of a power plant kept at a fixed temperature are good approximations of reservoirs. Heat engines are described by stating which reservoirs they exchange heat with.
:::

:::definizione{#trasformazione-reversibile titolo="Reversible process"}
A process of a system is **reversible** if it can be traversed in the opposite direction, bringing back to the initial state both the system and the surroundings with which it has interacted. A reversible process is quasi-static, that is, made of equilibrium states, and free of dissipative effects. Moreover, heat is exchanged in it only between bodies whose temperatures differ by an infinitesimal amount.

Real processes are **irreversible**. The typical causes are friction, heat exchanges between bodies at different temperatures, the free expansion of a gas into vacuum and the mixing of different substances. A reversible process is therefore an ideal model; it serves as a benchmark because, as Carnot's theorem shows, a reversible engine has the maximum efficiency between two given reservoirs.
:::

:::richiamo{titolo="First law of thermodynamics"}
For a closed system that goes from a state $A$ to a state $B$, $\Delta U = Q - L$ holds, where $Q$ is the heat absorbed by the system and $L$ the work done by the system. In a cycle the final state coincides with the initial one, therefore $\Delta U = 0$ and $L = Q$. See the topic on the first law of thermodynamics.
:::

## Heat engines and efficiency

:::definizione{#macchina-termica titolo="Heat engine"}
A **heat engine** is a system that undergoes a cyclic process, absorbs heat from one or more reservoirs, releases part of it to other reservoirs and produces positive work. We denote by $Q_{\text{in}} > 0$ the sum of the heats absorbed in a cycle and by $Q_{\text{out}} > 0$ the sum of the absolute values of the heats released. Since $L = Q$ in a cycle, the work produced in a cycle is
$$
L = Q_{\text{in}} - Q_{\text{out}} .
$$
In the simplest case the engine operates between two reservoirs at temperatures $T_1 > T_2$; then $Q_1$ and $Q_2$ denote the heats exchanged with the hot reservoir and with the cold one, taken with the sign of the convention of the first law. For an engine $Q_1 > 0$, $Q_2 < 0$ and $L = Q_1 + Q_2 > 0$. If the working fluid of the engine goes through a quasi-static cycle, the work is the area enclosed by the cycle in the $(V, p)$ plane, positive when the cycle is traversed clockwise.

::grafico{curve="3+2*cos(t),3+1.5*sin(t),0,6.29" area="3+1.5*sqrt(1-((x-3)/2)^2);3-1.5*sqrt(1-((x-3)/2)^2);1;5" vettori="2.6,4.47,3.4,4.47;3.4,1.53,2.6,1.53" etichette="2.2,3.1,L = area" xmin=-0.5 xmax=6 ymin=-0.5 ymax=5.5 nomi="V,p" titolo="A cycle traversed clockwise in the $(V, p)$ plane, in arbitrary units: the work done by the fluid in one cycle is positive and equal to the enclosed area"}

:::

:::definizione{#rendimento titolo="Efficiency"}
The **efficiency** of a heat engine is the ratio of the work produced in a cycle to the heat absorbed in the same cycle:
$$
\eta = \frac{L}{Q_{\text{in}}} = 1 - \frac{Q_{\text{out}}}{Q_{\text{in}}} .
$$
For an engine between two reservoirs the formula becomes $\eta = 1 + \dfrac{Q_2}{Q_1} = 1 - \dfrac{|Q_2|}{Q_1}$. The efficiency is a pure number and measures what fraction of the heat absorbed becomes work. From the formula it follows that $\eta < 1$ whenever the engine releases heat; the second law states that this release is unavoidable. For example, an engine that in each cycle absorbs $2000\,\mathrm{J}$ and releases $1500\,\mathrm{J}$ produces $L = 500\,\mathrm{J}$ and has efficiency $\eta = 0.25$.
:::

## Refrigerators and heat pumps

:::definizione{#macchina-frigorifera titolo="Refrigerator"}
A **refrigerator** is a machine that goes through a cycle in which it absorbs heat from a cold reservoir at temperature $T_2$ and releases heat to a hot reservoir at temperature $T_1 > T_2$, receiving work from the outside. With the sign convention $Q_2 > 0$, $Q_1 < 0$ and $L < 0$, and the balance of the cycle $L = Q_1 + Q_2$ gives
$$
|Q_1| = Q_2 + |L| ,
$$
that is, the hot reservoir receives both the heat extracted from the cold reservoir and the equivalent of the work spent. In the $(V, p)$ plane the cycle of a refrigerator is traversed counterclockwise, and the enclosed area is the work received. A household refrigerator extracts heat from its interior and releases it to the kitchen; a **heat pump** is the same machine used to heat a room with heat taken from the colder outside.
:::

:::definizione{#efficienza titolo="Coefficient of performance of refrigerators and heat pumps"}
The **coefficient of performance** of a refrigerator is the ratio of the heat extracted from the cold reservoir to the work spent:
$$
\varepsilon = \frac{Q_2}{|L|} .
$$
For a heat pump the useful effect is the heat released to the hot reservoir, therefore its coefficient of performance is
$$
\varepsilon_{\text{hp}} = \frac{|Q_1|}{|L|} = \frac{Q_2 + |L|}{|L|} = \varepsilon + 1 .
$$
The coefficients of performance can exceed $1$, since the work spent serves only to transfer heat from one reservoir to the other. For example, a refrigerator that extracts $300\,\mathrm{J}$ from its interior while spending $100\,\mathrm{J}$ of work has $\varepsilon = 3$ and releases $400\,\mathrm{J}$ to the kitchen; the same machine used as a heat pump has $\varepsilon_{\text{hp}} = 4$.
:::

## Statements of the second law

:::teorema{#enunciato-di-kelvin-planck titolo="Second law: Kelvin-Planck statement"}
It is impossible to carry out a process whose *only* result is the absorption of heat from a single reservoir and its complete conversion into work.

It is a law, that is, a statement derived from experience and not provable from other laws. The word *only* has a precise role. In an isothermal expansion an ideal gas converts into work all the heat absorbed from a reservoir, but its volume increases, therefore the result is not the only one. For a cyclic machine the statement says that there is no engine that operates with a single reservoir; therefore every engine must release heat to a colder reservoir, and hence it has efficiency $\eta < 1$.
:::

:::teorema{#enunciato-di-clausius titolo="Second law: Clausius statement"}
It is impossible to carry out a process whose *only* result is the transfer of heat from a body at lower temperature to a body at higher temperature.

This too is a law derived from experience, according to which heat flows spontaneously only from the hotter body to the colder one. A refrigerator transfers heat from the cold interior to the kitchen, but to do so it receives work from the outside; in terms of coefficient of performance, the statement says that every refrigerator has $|L| > 0$, that is, finite $\varepsilon$.
:::

::::teorema{#equivalenza-degli-enunciati titolo="Equivalence of the statements"}
The Kelvin-Planck statement and the Clausius statement are equivalent, that is, if one of the two were false the other would be false too.

The equivalence makes it possible to use, in any argument, the more convenient statement. The proofs of Carnot's theorem and of the Clausius inequality are based on the Kelvin-Planck statement.

:::dimostrazione
Let two reservoirs at temperatures $T_1 > T_2$ be given.

Suppose the Kelvin-Planck statement is false. Then there exists a machine $M$ that in one cycle absorbs $Q$ from the hot reservoir and produces the work $L = Q$. This work is used to drive a refrigerator $F$ that absorbs $Q_2' > 0$ from the cold reservoir and releases $Q_2' + L$ to the hot reservoir. The machine composed of $M$ and $F$ exchanges no work with the outside; the hot reservoir receives in total $Q_2' + L - Q = Q_2'$ and the cold reservoir releases $Q_2'$. Therefore the only result is the transfer of $Q_2'$ from the cold body to the hot body, and the Clausius statement is false.

Suppose the Clausius statement is false. Then there exists a device $D$ that transfers a heat $Q$ from the cold reservoir to the hot one without other effects. An engine is operated between the two reservoirs that absorbs $Q_1$ from the hot reservoir, produces $L > 0$ and releases $Q$ to the cold reservoir, and $D$ is used to bring $Q$ back to the hot reservoir. The cold reservoir undergoes no change, and the hot reservoir releases in total $Q_1 - Q = L$. Therefore the only result is the complete conversion into work of heat taken from a single reservoir, and the Kelvin-Planck statement is false.
:::
::::

## Carnot cycle

:::definizione{#ciclo-di-carnot titolo="Carnot cycle"}
The **Carnot cycle** is a reversible cycle that exchanges heat with only two reservoirs, at temperatures $T_1 > T_2$. It consists of four quasi-static processes:

- $A \to B$: isothermal expansion at the temperature $T_1$, in which the fluid absorbs $Q_1 > 0$;
- $B \to C$: adiabatic expansion, in which the temperature drops from $T_1$ to $T_2$;
- $C \to D$: isothermal compression at the temperature $T_2$, in which the fluid releases heat, $Q_2 < 0$;
- $D \to A$: adiabatic compression, in which the temperature rises again from $T_2$ to $T_1$.

Heat exchanges occur only along the isotherms, at the same temperature as the reservoir the fluid is in contact with, and for this reason the cycle is reversible. Traversed in the opposite direction, $A \to D \to C \to B \to A$, the Carnot cycle is a refrigerator.

::grafico{curve="t<1?(1+(1.5)*(t-0)):(t<2?(2.5+(2.5)*(t-1)):(t<3?(5+(-3)*(t-2)):((2+(-1)*(t-3))))),t<1?8/(1+(1.5)*(t-0)):(t<2?14.74/(2.5+(2.5)*(t-1))^1.6667:(t<3?5.04/(5+(-3)*(t-2)):(8/(2+(-1)*(t-3))^1.6667))),0,4" vettori="1.6,5,1.9,4.21;3.5,1.83,4,1.46;3.8,1.33,3.2,1.57;1.6,3.65,1.4,4.57" punti="1,8,pieno,A;2.5,3.2,pieno,B;5,1.01,pieno,C;2,2.52,pieno,D" etichette="1.95,5.3,T₁;3.4,1.05,T₂" xmin=-0.3 xmax=6 ymin=-0.5 ymax=9 nomi="V,p" titolo="Carnot cycle of a monatomic ideal gas in the $(V, p)$ plane, in arbitrary units: isotherms $AB$ and $CD$, adiabats $BC$ and $DA$, steeper than the isotherms"}

:::

:::richiamo{titolo="Reversible adiabatic process of the ideal gas"}
In a reversible adiabatic process of an ideal gas $T V^{\gamma - 1} = \text{constant}$ holds, with $\gamma = \dfrac{c_p}{c_V}$. See the topic on the first law of thermodynamics.
:::

::::teorema{#rendimento-di-carnot titolo="Efficiency of the Carnot cycle"}
Let an ideal gas go through a Carnot cycle between the reservoirs at temperatures $T_1 > T_2$. Then
$$
\frac{Q_2}{Q_1} = -\frac{T_2}{T_1}
\qquad\text{and}\qquad
\eta_C = 1 - \frac{T_2}{T_1} .
$$
The efficiency depends only on the temperatures of the two reservoirs, expressed in kelvins. For a Carnot engine between $T_1 = 800\,\mathrm{K}$ and $T_2 = 300\,\mathrm{K}$ one obtains $\eta_C = 1 - \dfrac{3}{8} = 0.625$. The first relation can be written $\dfrac{Q_1}{T_1} + \dfrac{Q_2}{T_2} = 0$, and from this form the Clausius inequality and entropy arise.

:::dimostrazione
Along the isotherm $A \to B$ the internal energy of the ideal gas does not change, because it depends only on the temperature. Therefore, by the first law, the heat absorbed equals the work done by the gas:
$$
Q_1 = L_{AB} = \int_{V_A}^{V_B} \frac{nRT_1}{V}\, dV = nRT_1 \ln\frac{V_B}{V_A} > 0 .
$$
In the same way, along the isotherm $C \to D$ one has
$$
Q_2 = nRT_2 \ln\frac{V_D}{V_C} = -\,nRT_2 \ln\frac{V_C}{V_D} < 0 .
$$
The processes $B \to C$ and $D \to A$ are reversible adiabatic, therefore
$$
\begin{cases}
T_1 V_B^{\gamma - 1} = T_2 V_C^{\gamma - 1} \\[4pt]
T_1 V_A^{\gamma - 1} = T_2 V_D^{\gamma - 1}
\end{cases}
$$
Dividing the first equation by the second, side by side, gives $\left(\dfrac{V_B}{V_A}\right)^{\gamma - 1} = \left(\dfrac{V_C}{V_D}\right)^{\gamma - 1}$, therefore $\dfrac{V_B}{V_A} = \dfrac{V_C}{V_D}$. Then the two logarithms coincide and
$$
\frac{Q_2}{Q_1} = -\frac{nRT_2 \ln\dfrac{V_C}{V_D}}{nRT_1 \ln\dfrac{V_B}{V_A}} = -\frac{T_2}{T_1} .
$$
Finally $\eta_C = 1 + \dfrac{Q_2}{Q_1} = 1 - \dfrac{T_2}{T_1}$.
:::
::::

:::osservazione{#efficienza-di-carnot titolo="Carnot refrigerator and heat pump"}
The Carnot cycle traversed in the reverse direction exchanges the same heats with opposite signs, therefore $\dfrac{|Q_1|}{Q_2} = \dfrac{T_1}{T_2}$ still holds. From the definitions of the coefficient of performance it follows that
$$
\varepsilon_C = \frac{Q_2}{|Q_1| - Q_2} = \frac{T_2}{T_1 - T_2} ,
\qquad
\varepsilon_{\text{hp},C} = \frac{|Q_1|}{|Q_1| - Q_2} = \frac{T_1}{T_1 - T_2} .
$$
The coefficients of performance increase when the two temperatures are close. A Carnot refrigerator between $T_2 = 260\,\mathrm{K}$ and $T_1 = 300\,\mathrm{K}$ has $\varepsilon_C = \dfrac{260}{40} = 6.5$; a Carnot heat pump that heats a house at $300\,\mathrm{K}$ taking heat from the outside at $270\,\mathrm{K}$ has $\varepsilon_{\text{hp},C} = \dfrac{300}{30} = 10$.
:::

## Carnot's theorem and thermodynamic temperature

::::teorema{#teorema-di-carnot titolo="Carnot's theorem"}
Let two reservoirs at temperatures $T_1 > T_2$ be given. Then:

- all reversible engines operating between the two reservoirs have the same efficiency;
- every engine operating between the two reservoirs has efficiency less than or equal to that of a reversible engine.

Since the Carnot cycle of an ideal gas is a reversible engine, the common efficiency of reversible engines is $\eta_C = 1 - \dfrac{T_2}{T_1}$, whatever the working fluid. Every engine between $T_1$ and $T_2$ therefore satisfies $\eta \leq 1 - \dfrac{T_2}{T_1}$, and the theorem sets the maximum efficiency of an engine between two given temperatures.

:::dimostrazione
Let $R$ be a reversible engine and $M$ an arbitrary engine between the two reservoirs. $M$ is operated so that in one cycle it absorbs $Q_1 > 0$ from the hot reservoir; it then produces the work $L_M = \eta_M Q_1$. Since $R$ is reversible, it is run in the reverse direction, as a refrigerator, adjusted so that it releases the same heat $Q_1$ to the hot reservoir; in this way $R$ receives the work $L_R = \eta_R Q_1$ and extracts the heat $Q_1 - L_R$ from the cold reservoir.

The machine composed of $M$ and $R$ exchanges no heat with the hot reservoir. With the cold reservoir it exchanges in total
$$
(Q_1 - L_R) - (Q_1 - L_M) = L_M - L_R ,
$$
heat that is absorbed, and it produces the net work $L_M - L_R$. If $L_M - L_R > 0$, the composite machine would convert completely into work heat taken from a single reservoir, contradicting the **Kelvin-Planck statement**. Therefore $L_M \leq L_R$, that is, $\eta_M \leq \eta_R$. If $M$ is also reversible, the argument is repeated with the roles of the two engines exchanged and one obtains $\eta_R \leq \eta_M$, therefore $\eta_M = \eta_R$.
:::
::::

:::osservazione{#bilancio-di-una-macchina titolo="Balance of an engine between two reservoirs"}
For an arbitrary engine between $T_1$ and $T_2$ with $Q_1 > 0$, Carnot's theorem gives $1 + \dfrac{Q_2}{Q_1} \leq 1 - \dfrac{T_2}{T_1}$; multiplying by $\dfrac{Q_1}{T_2} > 0$ one obtains
$$
\frac{Q_1}{T_1} + \frac{Q_2}{T_2} \leq 0 ,
$$
with the equality sign *only* for reversible engines. This relation is the practical criterion for deciding whether a claimed engine is possible. An engine between $400\,\mathrm{K}$ and $300\,\mathrm{K}$ that absorbs $5000\,\mathrm{J}$ and produces $1500\,\mathrm{J}$ would release $3500\,\mathrm{J}$, and $\dfrac{5000}{400} - \dfrac{3500}{300} \approx 0.83\,\mathrm{J/K} > 0$; therefore an engine with this performance **does not exist**. Its claimed efficiency, $0.30$, indeed exceeds $\eta_C = 0.25$.
:::

:::definizione{#temperatura-termodinamica titolo="Thermodynamic temperature"}
By Carnot's theorem the ratio $\dfrac{|Q_2|}{Q_1}$ is the same for all reversible engines between two reservoirs, and it therefore depends only on the reservoirs and on no property of the working fluid. The **thermodynamic temperature** is the scale defined by the relation
$$
\frac{T_2}{T_1} = \frac{|Q_2|}{Q_1} \qquad \text{(reversible engine between } T_1 \text{ and } T_2\text{)} ,
$$
with the unit fixed by assigning $T = 273.16\,\mathrm{K}$ to the triple point of water. The scale does not depend on any thermometric substance. The **efficiency of the Carnot cycle** computed for the ideal gas shows that the ratio of the heats coincides with the ratio of the ideal-gas temperatures, therefore the two scales coincide and the kelvin of the gas thermometer is the thermodynamic kelvin.
:::

## Clausius inequality

::::teorema{#disuguaglianza-di-clausius titolo="Clausius inequality"}
Let a system go through a cycle exchanging the heats $Q_1, Q_2, \dots, Q_n$ with $n$ reservoirs at the temperatures $T_1, T_2, \dots, T_n$, where $Q_i$ is the heat absorbed by the system from reservoir $i$. Then
$$
\sum_{i=1}^{n} \frac{Q_i}{T_i} \leq 0 ,
$$
and the equality sign holds if the cycle is reversible. When the exchanges are continuous, the sum becomes the integral along the cycle
$$
\oint \frac{\delta Q}{T} \leq 0 ,
$$
where $\delta Q$ is the infinitesimal heat absorbed and $T$ is the temperature of the reservoir that supplies it. The symbol $\delta Q$ indicates that heat depends on the process and therefore is not the differential of a function of state. For two reservoirs the inequality is the balance $\dfrac{Q_1}{T_1} + \dfrac{Q_2}{T_2} \leq 0$ obtained from Carnot's theorem; the definition of entropy arises from this inequality.

:::dimostrazione
We introduce an auxiliary reservoir at temperature $T_0$ and, for each $i$, a Carnot engine $C_i$ between $T_0$ and $T_i$, adjusted so that in one cycle it releases to reservoir $i$ exactly the heat $Q_i$ that the system extracts from it (if $Q_i < 0$, the engine $C_i$ extracts the heat $|Q_i|$ from the reservoir). Since $C_i$ is reversible, the heat $Q_{0,i}$ that it exchanges with the auxiliary reservoir satisfies $\dfrac{Q_{0,i}}{T_0} + \dfrac{-Q_i}{T_i} = 0$, that is,
$$
Q_{0,i} = T_0\, \frac{Q_i}{T_i} .
$$
Consider the machine composed of the system and the $n$ Carnot engines. At the end of a cycle each reservoir $i$ has returned to its state, and the composite machine has exchanged heat only with the auxiliary reservoir, absorbing in total
$$
Q_0 = \sum_{i=1}^{n} Q_{0,i} = T_0 \sum_{i=1}^{n} \frac{Q_i}{T_i} .
$$
By the first law applied to the cycle, the composite machine has produced the work $L = Q_0$. By the **Kelvin-Planck statement** it is not possible that $Q_0 > 0$, because the machine would convert completely into work heat taken from a single reservoir. Therefore $Q_0 \leq 0$, and since $T_0 > 0$ one has $\displaystyle\sum_{i=1}^{n} \frac{Q_i}{T_i} \leq 0$.

If the cycle of the system is reversible, it is traversed in the opposite direction together with the Carnot engines; in this way all the heats change sign, and the same argument gives $-\displaystyle\sum_{i=1}^{n} \frac{Q_i}{T_i} \leq 0$. The two inequalities together give the equality.
:::
::::

## Entropy

::::teorema{#indipendenza-dal-cammino titolo="Clausius integral over reversible processes"}
Let $A$ and $B$ be two equilibrium states of a system. Then the integral
$$
\int_A^B \frac{\delta Q}{T}
$$
computed along a reversible process from $A$ to $B$ has the same value for *every* reversible process connecting the two states.

The theorem says that, over reversible processes, $\dfrac{\delta Q}{T}$ behaves like the differential of a function of state, while $\delta Q$ alone depends on the path. In a reversible process the temperature of the system equals that of the reservoir with which it exchanges heat, therefore $T$ is also the temperature of the system.

:::dimostrazione
Let $\gamma_1$ and $\gamma_2$ be two reversible processes from $A$ to $B$. Traversing $\gamma_1$ from $A$ to $B$ and then $\gamma_2$ in the opposite direction from $B$ to $A$ gives a reversible cycle. In the reverse process every heat exchanged changes sign, therefore the **Clausius inequality** with the equality sign gives
$$
\int_{\gamma_1} \frac{\delta Q}{T} - \int_{\gamma_2} \frac{\delta Q}{T} = 0 ,
$$
that is, the two integrals are equal.
:::
::::

:::definizione{#entropia titolo="Entropy"}
**Entropy** is the state function $S$ defined, up to an additive constant, by the relation
$$
S(B) - S(A) = \int_A^B \left( \frac{\delta Q}{T} \right)_{\text{rev}} ,
$$
where the integral is computed along any reversible process from $A$ to $B$. The unit of measurement is the $\mathrm{J/K}$. Since $S$ is a state function, the change $\Delta S$ depends only on the initial and final states; for an irreversible process it is therefore computed along a conveniently chosen reversible process between the same states. In a reversible process $dS = \dfrac{\delta Q}{T}$, therefore $\delta Q = T\, dS$; a reversible adiabatic process has $\Delta S = 0$ and is called **isentropic**. For example, a system that reversibly absorbs $1200\,\mathrm{J}$ at the constant temperature of $300\,\mathrm{K}$ has $\Delta S = \dfrac{1200}{300} = 4.0\,\mathrm{J/K}$.
:::

:::osservazione{#diagramma-ts titolo="The TS plane"}
Along a reversible process represented in the $(S, T)$ plane one has $Q = \displaystyle\int_{S_A}^{S_B} T\, dS$, therefore the heat absorbed is the area under the curve, positive when entropy increases.

::grafico{f="250+150*(x-1)-25*(x-1)^2" area="250+150*(x-1)-25*(x-1)^2;0;1.5;4" punti="1.5,318.75,pieno,A;4,475,pieno,B" segmenti="1.5,0,1.5,318.75;4,0,4,475" xmin=-0.3 xmax=5 ymin=0 ymax=1000 nomi="S,T" titolo="In a reversible process from $A$ to $B$ the heat absorbed is $Q = \displaystyle\int_{S_A}^{S_B} T\, dS$, the area under the curve in the $(S, T)$ plane, with $T$ in kelvins and $S$ in arbitrary units"}

For a reversible cycle the enclosed area is the net heat absorbed, that is, the work. The Carnot cycle in the $(S, T)$ plane is a rectangle, because the isotherms are horizontal segments and the reversible adiabats vertical segments. The heat absorbed is $Q_1 = T_1 \Delta S$, the work is $(T_1 - T_2)\,\Delta S$, and their ratio is again $\eta_C = 1 - \dfrac{T_2}{T_1}$.

::grafico{vettori="1,800,4,800,Q₁;4,800,4,300;4,300,1,300,Q₂;1,300,1,800" area="800;300;1;4" etichette="2.3,550,L" xmin=-0.3 xmax=5 ymin=0 ymax=1000 nomi="S,T" titolo="Carnot cycle between $T_1 = 800\,\mathrm{K}$ and $T_2 = 300\,\mathrm{K}$ in the $(S, T)$ plane, with $S$ in arbitrary units: the area of the rectangle is the work $L = (T_1 - T_2)\,\Delta S$"}

:::

::::teorema{#entropia-e-irreversibilita titolo="Entropy in irreversible processes"}
Let a system go from the equilibrium state $A$ to the equilibrium state $B$ through an arbitrary process, exchanging heat with reservoirs whose temperatures are denoted by $T$. Then
$$
S(B) - S(A) \geq \int_A^B \frac{\delta Q}{T} ,
$$
with the equality sign if the process is reversible. In an irreversible process the change in entropy therefore exceeds the Clausius integral; the difference is the entropy produced by the irreversibility.

:::dimostrazione
Let $\gamma$ be the process from $A$ to $B$ and let $\rho$ be a reversible process from $B$ to $A$. The cycle formed by $\gamma$ and $\rho$ satisfies the **Clausius inequality**:
$$
\int_{\gamma} \frac{\delta Q}{T} + \int_{\rho} \frac{\delta Q}{T} \leq 0 .
$$
Since $\rho$ is reversible, by the definition of entropy $\displaystyle\int_{\rho} \frac{\delta Q}{T} = S(A) - S(B)$. Substituting gives $\displaystyle\int_{\gamma} \frac{\delta Q}{T} \leq S(B) - S(A)$, that is, the claim.
:::
::::

## Entropy of the ideal gas

:::richiamo{titolo="Integral of the reciprocal"}
For $0 < a < b$, $\displaystyle\int_a^b \frac{dx}{x} = \ln b - \ln a = \ln\frac{b}{a}$ holds. See the topic on integrals in Analysis 1.
:::

::::teorema{#entropia-del-gas-perfetto titolo="Change in entropy of the ideal gas"}
Let $n$ moles of ideal gas with molar heat at constant volume $c_V$ go from the state $(T_A, V_A)$ to the state $(T_B, V_B)$ through an arbitrary process. Then
$$
\Delta S = n c_V \ln\frac{T_B}{T_A} + nR \ln\frac{V_B}{V_A} = n c_p \ln\frac{T_B}{T_A} - nR \ln\frac{p_B}{p_A} .
$$
The formula also holds for irreversible processes, because $S$ is a state function and only the pair of states matters. For example $2.0$ moles of monatomic gas, with $c_V = \dfrac{3}{2}R$, heated at constant volume from $300\,\mathrm{K}$ to $450\,\mathrm{K}$ have $\Delta S = 2.0 \cdot \dfrac{3}{2} \cdot 8.314 \cdot \ln 1.5 \approx 10.1\,\mathrm{J/K}$.

:::dimostrazione
$\Delta S$ is computed along a reversible process from $A$ to $B$. In an infinitesimal step the first law gives $\delta Q = dU + p\, dV$, with $dU = n c_V\, dT$ for the ideal gas and $p = \dfrac{nRT}{V}$ by the equation of state. Therefore
$$
dS = \frac{\delta Q}{T} = n c_V \frac{dT}{T} + nR \frac{dV}{V} ,
$$
and integrating each term gives the first formula. For the second one we use $\dfrac{V_B}{V_A} = \dfrac{T_B}{T_A} \cdot \dfrac{p_A}{p_B}$, which follows from the equation of state, and **Mayer's relation** $c_p = c_V + R$:
$$
\begin{aligned}
\Delta S &= n c_V \ln\frac{T_B}{T_A} + nR \ln\frac{T_B}{T_A} - nR \ln\frac{p_B}{p_A} \\[6pt]
&= n c_p \ln\frac{T_B}{T_A} - nR \ln\frac{p_B}{p_A} .
\end{aligned}
$$
:::
::::

:::osservazione{#trasformazioni-del-gas-perfetto titolo="Special cases"}
From the general formula follow the changes in entropy in the elementary processes:

- isothermal: $\Delta S = nR \ln\dfrac{V_B}{V_A} = \dfrac{Q}{T}$, positive in expansions;
- isochoric: $\Delta S = n c_V \ln\dfrac{T_B}{T_A}$;
- isobaric: $\Delta S = n c_p \ln\dfrac{T_B}{T_A}$;
- reversible adiabatic: $\Delta S = 0$, since $T V^{\gamma - 1}$ is constant and the two logarithms cancel each other.

For the same rise in temperature the isobaric process has a larger change in entropy than the isochoric one, since $c_p > c_V$. At constant pressure the gas absorbs more heat, because it returns part of it as work of expansion.

::grafico{curve="t,300*exp((t-1)/3),1,4.3;t,300*exp((t-1)/5),1,4.3" punti="1,300,pieno,A" etichette="2.3,640,isochoric;3.5,420,isobaric" xmin=-0.3 xmax=5 ymin=0 ymax=1000 nomi="S,T" titolo="In the $(S, T)$ plane, with $T$ in kelvins and $S$ in arbitrary units, the isochoric curve $T = T_A \exp\left(\dfrac{S - S_A}{n c_V}\right)$ is steeper than the isobaric curve $T = T_A \exp\left(\dfrac{S - S_A}{n c_p}\right)$ leaving the same state $A$"}

:::

:::esempio{titolo="Free expansion"}
An ideal gas is enclosed in one half of a container with rigid and insulating walls; the other half is empty. When the partition is broken the gas occupies the whole container without exchanging heat or work, therefore $\Delta U = 0$ and the final temperature equals the initial one. The process is irreversible and has $Q = 0$, but the change in entropy is computed along a reversible isotherm between the same states:
$$
\Delta S = nR \ln\frac{V_B}{V_A} = nR \ln 2 .
$$
For one mole $\Delta S = 8.314 \cdot \ln 2 \approx 5.76\,\mathrm{J/K} > 0 = \displaystyle\int \frac{\delta Q}{T}$, in agreement with the theorem on entropy in irreversible processes.
:::

## Entropy of bodies and reservoirs

:::teorema{#entropia-di-corpi-e-serbatoi titolo="Entropy of reservoirs, bodies and changes of state"}
The following formulas hold, where $Q$ is the heat absorbed.

- A reservoir at temperature $T$ that absorbs the heat $Q$ has $\Delta S = \dfrac{Q}{T}$.
- A body of mass $m$ and constant specific heat $c$, heated or cooled from $T_A$ to $T_B$, has $\Delta S = m c \ln\dfrac{T_B}{T_A}$.
- A mass $m$ that changes state at the temperature $T$ with latent heat $\lambda$ has $\Delta S = \pm\dfrac{m \lambda}{T}$, with the positive sign for melting and vaporization.

The reservoir exchanges heat at constant temperature, and the exchange can be regarded as reversible for the reservoir, therefore $\Delta S = \dfrac{Q}{T}$ even when the body it is in contact with has a different temperature. For the body, consider heating with a succession of reservoirs at gradually increasing temperatures, so that each exchange is reversible; then $\delta Q = m c\, dT$ and $\Delta S = \displaystyle\int_{T_A}^{T_B} \frac{m c\, dT}{T}$. In the change of state the temperature remains constant, therefore the heat $m\lambda$ is divided by $T$. For example $1.0\,\mathrm{kg}$ of water heated from $293\,\mathrm{K}$ to $353\,\mathrm{K}$, with $c = 4186\,\mathrm{J/(kg\cdot K)}$, has $\Delta S = 4186 \ln\dfrac{353}{293} \approx 780\,\mathrm{J/K}$, and $1.0\,\mathrm{kg}$ of ice melting at $273\,\mathrm{K}$, with $\lambda_f = 3.33 \cdot 10^5\,\mathrm{J/kg}$, has $\Delta S \approx 1.22 \cdot 10^3\,\mathrm{J/K}$.
:::

## Principle of entropy increase

::::teorema{#aumento-dell-entropia titolo="Principle of entropy increase"}
Let an isolated system, that is, one that exchanges neither heat nor work with the outside, go from the state $A$ to the state $B$. Then
$$
\Delta S = S(B) - S(A) \geq 0 ,
$$
with the equality sign only if the process is reversible. The system formed by a body and by all the reservoirs and bodies with which it interacts is called the **universe** and is isolated; therefore, denoting by $\Delta S_{\text{u}}$ the change in its entropy, in every real process $\Delta S_{\text{u}} > 0$. The principle establishes the direction of spontaneous processes, since it excludes every process that would decrease the entropy of an isolated system.

:::dimostrazione
The system is isolated, therefore in every step of the process $\delta Q = 0$ and the Clausius integral is zero. By **entropy in irreversible processes** one then has $S(B) - S(A) \geq 0$, with equality only in the reversible case.
:::
::::

:::esempio{titolo="Heat transfer between two reservoirs"}
A heat $Q = 1000\,\mathrm{J}$ passes by conduction from a reservoir at $500\,\mathrm{K}$ to a reservoir at $250\,\mathrm{K}$. The hot reservoir absorbs $-1000\,\mathrm{J}$ and the cold one $+1000\,\mathrm{J}$, therefore
$$
\Delta S_{\text{u}} = -\frac{1000}{500} + \frac{1000}{250} = -2.0 + 4.0 = 2.0\,\mathrm{J/K} > 0 .
$$
The reverse transfer would give $\Delta S_{\text{u}} = -2.0\,\mathrm{J/K}$, and the principle excludes it; in this way the **Clausius statement** is recovered.
:::

:::osservazione{#equilibrio-e-massimo-di-entropia titolo="Equilibrium and maximum of entropy"}
Two bodies with heat capacity $C = 50\,\mathrm{J/K}$ at the temperatures $400\,\mathrm{K}$ and $200\,\mathrm{K}$ form an isolated system. If the first releases the heat $Q$ to the second, the temperatures become $400 - \dfrac{Q}{C}$ and $200 + \dfrac{Q}{C}$, and the entropy of the system changes by
$$
\Delta S(Q) = C \ln\frac{400 - \dfrac{Q}{C}}{400} + C \ln\frac{200 + \dfrac{Q}{C}}{200} .
$$
The function increases as long as the hot body is hotter than the other one and has its maximum at $Q = 5\,\mathrm{kJ}$, when both temperatures are $300\,\mathrm{K}$; there $\Delta S \approx 5.9\,\mathrm{J/K}$. The equilibrium state of an isolated system is therefore the state of **maximum entropy** compatible with the constraints.

::grafico{f="50*(log(1-x*20/400)+log(1+x*20/200))" punti="5,5.89,pieno" segmenti="5,0,5,5.89" xmin=-0.5 xmax=10.5 ymin=-0.5 ymax=7 nomi="Q,ΔS" titolo="Change in entropy (in $\mathrm{J/K}$) as a function of the heat transferred $Q$ (in $\mathrm{kJ}$): the maximum corresponds to thermal equilibrium at $300\,\mathrm{K}$"}

:::

:::osservazione{#lavoro-perso titolo="Entropy and lost work"}
Let an engine operate between the reservoirs $T_1 > T_2$, absorb $Q_1$ and produce $L = Q_1 + Q_2$. In a cycle the entropy of the working fluid does not change, therefore the entropy of the universe is the sum of those of the reservoirs, $\Delta S_{\text{u}} = -\dfrac{Q_1}{T_1} - \dfrac{Q_2}{T_2}$. A reversible engine that absorbs the same $Q_1$ would produce $L_{\text{rev}} = Q_1\left(1 - \dfrac{T_2}{T_1}\right)$, and the difference is
$$
L_{\text{rev}} - L = -\,Q_2 - \frac{T_2}{T_1}\, Q_1 = T_2\, \Delta S_{\text{u}} .
$$
The work lost because of irreversibilities is therefore proportional to the entropy produced. For example, an engine between $500\,\mathrm{K}$ and $300\,\mathrm{K}$ that absorbs $1000\,\mathrm{J}$ and produces $250\,\mathrm{J}$ generates $\Delta S_{\text{u}} = -2.0 + 2.5 = 0.5\,\mathrm{J/K}$ and loses $300 \cdot 0.5 = 150\,\mathrm{J}$ compared with the $400\,\mathrm{J}$ of the reversible engine.
:::
