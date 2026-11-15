---
titolo: Second law, heat engines and entropy
sommario: The direction of spontaneous processes, heat-engine efficiency, the Carnot cycle, and entropy balances.
---

## Reversible and irreversible processes

:::definizione{#reversibilita titolo="Reversibility"}
A process is **reversible** if it can be reversed to restore both the system and its surroundings to their initial states. To achieve this, the exchanges must be reversible through infinitesimal changes in external conditions, with no friction or other dissipation.

A gas under a frictionless piston gives an example. If the external pressure is slightly higher than the gas pressure, the piston compresses the gas slowly. An infinitesimal reduction in external pressure allows a slow expansion. In the reversible model the gas passes through the same intermediate states in reverse order. Similarly, reversible thermal contact requires an infinitesimal temperature difference.
:::

:::osservazione
A slow process keeps the system close to equilibrium and is therefore quasistatic. If the piston rubs against the cylinder, however, energy is dissipated in both directions of motion. After a round trip the gas can be in its initial state while the surroundings have received energy that was previously in another form. The process is therefore **irreversible** even when it is slow.

Spontaneous heat transfer between two bodies at different temperatures is another irreversible process. If the hotter body gives up $100\,\mathrm{J}$, the colder body receives $100\,\mathrm{J}$. An exchange in the opposite direction would also conserve energy. The first law determines how much energy is transferred, while the second law determines the spontaneous direction of the transfer.
:::

## Statements of the second law

:::teorema{#secondo-principio titolo="Clausius and Kelvin–Planck statements"}
The **Clausius** statement rules out a process whose sole result is the transfer of heat from a colder body to a hotter one. A refrigerator transfers heat in this direction and its compressor also receives work from the surroundings.

The **Kelvin–Planck** statement rules out a cyclic device whose sole result is to extract heat from a single reservoir and convert it entirely to work. An engine exchanging heat with just two reservoirs must therefore reject some of the heat it absorbs from the hot reservoir to the cold reservoir.
:::

::::teorema{#equivalenza-enunciati titolo="Equivalence of the two statements"}
A violation of the Clausius statement would allow a violation of the Kelvin–Planck statement, and vice versa.

:::dimostrazione
An ordinary engine absorbs $Q_h$ from the hot reservoir and rejects $Q_c$ to the cold one. Suppose a device could return exactly $Q_c$ from the cold reservoir to the hot one without receiving work. The cold reservoir would regain its initial energy. The combined system would extract $Q_h-Q_c$ from the hot reservoir alone and do an equal amount of work. This contradicts Kelvin–Planck.

Now suppose a device could produce work $W$ by converting an amount of heat $W$ extracted from the hot reservoir entirely into work. That work drives a refrigerator that removes $Q_c$ from the cold reservoir and delivers $Q_c+W$ to the hot one. The work is produced and consumed within the combined system. The hot reservoir receives a net amount $Q_c$, so the sole result is the transfer of heat from the cold reservoir to the hot one. This contradicts Clausius.
:::
::::

:::attenzione
In a single reversible isothermal expansion of an ideal gas, the internal energy remains constant. The heat absorbed therefore equals the work done. The gas ends at a larger volume, so the expansion alone does not make up a cycle. Other processes are needed to restore the initial state.
:::

## Heat engines and efficiency

:::definizione{#rendimento titolo="Energy balance for a heat engine"}
A cyclic heat engine absorbs an amount of heat $Q_h>0$ from the hot reservoir, rejects an amount $Q_c>0$ to the cold reservoir, and does net work $W>0$. The subscripts $h$ and $c$ denote the hot and cold reservoirs, respectively. Both $Q_h$ and $Q_c$ are magnitudes. With the sign of heat defined relative to the working fluid, the net heat it absorbs is $Q_h-Q_c$.

Since the working fluid returns to its initial state, $\Delta U=0$. Applying the first law to the entire cycle gives
$$
0=Q_h-Q_c-W,\qquad W=Q_h-Q_c.
$$
The **efficiency** is the fraction of the absorbed heat that the engine delivers as useful work,
$$
\eta=\frac{W}{Q_h}=1-\frac{Q_c}{Q_h}.
$$
The ratio has no units because its numerator and denominator are energies. The net heat equals $W$, so the denominator is the heat absorbed $Q_h$.
:::

:::esempio{titolo="Energy per cycle and power"}
An engine absorbs $2000\,\mathrm{J}$ per cycle and rejects $1400\,\mathrm{J}$. The balance gives
$$
\begin{aligned}
W &= (2000-1400)\,\mathrm{J}=600\,\mathrm{J},\\[6pt]
\eta &= \frac{600\,\mathrm{J}}{2000\,\mathrm{J}}=0.30.
\end{aligned}
$$
Its efficiency is therefore $30\%$. At a frequency of $5\,\mathrm{Hz}$ the engine repeats the cycle five times per second. Its average output power is $P=fW=(5\cdot600)\,\mathrm{W}=3000\,\mathrm{W}$. Heat is rejected to the cold reservoir at $7000\,\mathrm{W}$, so the two output powers add up to the $10000\,\mathrm{W}$ input.

::grafico{assi=0 uguale=1 linee="-2,2 2,2 2,3 -2,3 -2,2;-1,-0.65 1,-0.65 1,0.65 -1,0.65 -1,-0.65;-2,-3 2,-3 2,-2 -2,-2 -2,-3" vettori="0,1.95,0,0.7,Q_h;0,-0.7,0,-1.95,Q_c;1.05,0,2.85,0,W" etichette="-1.37,2.5,Hot reservoir;-0.61,0.03,Engine;-1.38,-2.5,Cold reservoir" xmin=-3 xmax=4 ymin=-3.6 ymax=3.6 titolo="Balance per cycle. The engine receives $Q_h=2000\,\mathrm{J}$ and delivers $Q_c=1400\,\mathrm{J}$ and $W=600\,\mathrm{J}$."}

:::

## Carnot cycle and Carnot's theorem

:::definizione{#ciclo-carnot titolo="The four stages of the cycle"}
The Carnot cycle operates between two reservoirs with absolute temperatures $T_h>T_c>0$. When the device operates as an engine, the working fluid expands in contact with the hot reservoir and absorbs heat at temperature $T_h$. It then undergoes a reversible adiabatic expansion to $T_c$. At temperature $T_c$ the fluid is compressed and rejects heat to the cold reservoir. A reversible adiabatic compression then brings it back to the initial temperature and state.

On a temperature–entropy diagram, temperature is constant along the isotherms. Along the reversible adiabatic paths, $\Delta S=0$, so entropy is constant. If $\Delta S_*>0$ is the entropy increase along the hotter isotherm, then $Q_h=T_h\Delta S_*$. Since the cycle closes, the entropy decrease along the colder isotherm has the same magnitude $\Delta S_*$, and $Q_c=T_c\Delta S_*$.

::grafico{linee="2,600 4,600 4,300 2,300 2,600" punti="2,600,pieno;4,600,pieno;4,300,pieno;2,300,pieno" vettori="2.55,600,3.45,600;4,515,4,385;3.45,300,2.55,300;2,385,2,515" etichette="1.78,644,A;4.05,644,B;4.05,262,C;1.78,262,D" xmin=0 xmax=5 ymin=0 ymax=725 nomi="S,T (K)" titolo="Reversible cycle on a $T$–$S$ diagram. The heat absorbed along $AB$ is $600\cdot2\,\mathrm{J}$, and along $CD$ the heat rejected is $300\cdot2\,\mathrm{J}$. On the vertical segments $S$ is constant."}

:::

::::teorema{#carnot titolo="Maximum efficiency between two reservoirs"}
Any cyclic engine exchanging heat with only two reservoirs at temperatures $T_h>T_c>0$ has efficiency
$$
\eta\leq\eta_C=1-\frac{T_c}{T_h}.
$$
Equality holds for reversible operation. When irreversibilities are present, the efficiency is lower.

:::dimostrazione
The entropy change of the working fluid over a cycle is zero. The entropy changes of the two reservoirs are $-\dfrac{Q_h}{T_h}$ and $\dfrac{Q_c}{T_c}$. The total entropy change must be nonnegative, so
$$
\frac{Q_c}{T_c}-\frac{Q_h}{T_h}\geq0
\quad\Longrightarrow\quad
\frac{Q_c}{Q_h}\geq\frac{T_c}{T_h}.
$$
Substituting into $\eta=1-\dfrac{Q_c}{Q_h}$ gives the limit. If the process is reversible, the total entropy change is zero and the limit is attained.
:::
::::

:::esempio{titolo="Measured efficiency and theoretical limit"}
Between $600\,\mathrm{K}$ and $300\,\mathrm{K}$ the limit is $\eta_C=1-\dfrac{300}{600}=0.50$. For the same $Q_h=1000\,\mathrm{J}$, a reversible engine would deliver $500\,\mathrm{J}$ of work and reject $500\,\mathrm{J}$ of heat.

An engine that delivers $400\,\mathrm{J}$ of work per cycle rejects $600\,\mathrm{J}$ and has an efficiency of $0.40$. The data satisfy the energy balance and the second law. A reported work output of $600\,\mathrm{J}$ would satisfy the energy balance alone, but it would correspond to $\eta=0.60$ and violate the Carnot limit.

::grafico{f="1-300/x" xmin=290 xmax=900 ymin=0 ymax=0.8 punti="600,0.5,pieno" nomi="Tₕ,η_C" titolo="Carnot limit as $T_h$ varies with $T_c=300\,\mathrm{K}$. The marked point represents the limit at $T_h=600\,\mathrm{K}$."}

:::

:::attenzione
Carnot's ratio uses absolute temperatures. For reservoirs at $27\,{}^\circ\mathrm{C}$ and $327\,{}^\circ\mathrm{C}$ the temperatures are approximately $300$ and $600\,\mathrm{K}$, so $\eta_C\simeq0.50$. Taking the ratio of the Celsius values would give another limit because zero on the Celsius scale is shifted from absolute zero.
:::

## Refrigerators and heat pumps

:::definizione{#frigorifero titolo="Coefficients of performance"}
A refrigerator extracts heat $Q_c>0$ from the cold reservoir and receives work $W_{\mathrm{in}}>0$. Under the first-law sign convention, the work done by the fluid is $-W_{\mathrm{in}}$. Since its internal energy returns to its initial value,
$$
Q_h=Q_c+W_{\mathrm{in}}.
$$

For a refrigerator the desired effect is to remove $Q_c$, so $\mathrm{COP}_f=\dfrac{Q_c}{W_{\mathrm{in}}}$. For a heat pump the desired effect is to deliver $Q_h$, so $\mathrm{COP}_p=\dfrac{Q_h}{W_{\mathrm{in}}}=\mathrm{COP}_f+1$. The coefficients can exceed one because the work enables energy to be transferred from the cold reservoir. If $Q_c=600\,\mathrm{J}$ and $W_{\mathrm{in}}=200\,\mathrm{J}$, then $Q_h=800\,\mathrm{J}$ and the two coefficients are $3$ and $4$.
:::

:::teorema{#cop-carnot titolo="Reversible performance"}
If the cycle is reversible, the entropy changes of the two reservoirs have equal magnitudes, so $\dfrac{Q_h}{T_h}=\dfrac{Q_c}{T_c}$. Substituting $Q_h=Q_c\dfrac{T_h}{T_c}$ into $W_{\mathrm{in}}=Q_h-Q_c$ gives
$$
W_{\mathrm{in}}=Q_c\frac{T_h-T_c}{T_c}.
$$
The maximum coefficients between two reservoirs at constant temperatures are then
$$
\mathrm{COP}_{f,C}=\frac{T_c}{T_h-T_c},\qquad
\mathrm{COP}_{p,C}=\frac{T_h}{T_h-T_c}.
$$
Between $270$ and $300\,\mathrm{K}$ the reversible refrigerator has $\mathrm{COP}_{f,C}=9$. Removing $360\,\mathrm{J}$ from the refrigerated compartment therefore takes at least $40\,\mathrm{J}$ of work. For the same heat removed, an irreversible cycle requires more work.

::grafico{assi=0 uguale=1 linee="-2,2 2,2 2,3 -2,3 -2,2;-1.45,-0.65 1.45,-0.65 1.45,0.65 -1.45,0.65 -1.45,-0.65;-2,-3 2,-3 2,-2 -2,-2 -2,-3" vettori="0,0.7,0,1.95,Q_h;0,-1.95,0,-0.7,Q_c;3.15,0,1.5,0,W_in" etichette="-1.37,2.5,Hot reservoir;-1.06,0.03,Refrigerator;-1.38,-2.5,Cold reservoir" xmin=-3 xmax=4 ymin=-3.6 ymax=3.6 titolo="Energy flows in reverse operation. The compartment gives up $Q_c$ to the refrigerator, which also receives work and rejects $Q_h$ to the surroundings."}

:::

## Entropy of the system

:::definizione{#entropia titolo="Entropy change"}
**Entropy** $S$ is a state function. The difference between final and initial entropy can therefore be calculated along any reversible path connecting the same states, even when the actual process is irreversible.

For reversible heat transfer at a constant temperature $T$, with heat $Q_{\mathrm{rev}}$ positive when absorbed, the entropy change is
$$
\Delta S=\frac{Q_{\mathrm{rev}}}{T}.
$$
The unit is the joule per kelvin, $\mathrm{J/K}$. An ideal reservoir at $400\,\mathrm{K}$ stays at constant temperature when it gives up $800\,\mathrm{J}$. The heat is negative for the reservoir, and its entropy change is $-\dfrac{800\,\mathrm{J}}{400\,\mathrm{K}}=-2\,\mathrm{J/K}$.

When the temperature varies, the ratios of small reversible heat transfers to their corresponding temperatures are added up. In integral notation, $\Delta S=\int_i^f\dfrac{\delta Q_{\mathrm{rev}}}{T}$. The heat from an irreversible process and a single arbitrary temperature do not give this sum.
:::

:::teorema{#formule-entropia titolo="Heating, phase changes, and ideal gases"}
For a body with constant heat capacity $C$ and no phase change, the heat required for a small temperature increase is $C\,\mathrm{d}T$. Adding the contributions $\dfrac{C\,\mathrm{d}T}{T}$ gives
$$
\Delta S=C\ln\frac{T_f}{T_i}.
$$
With $C=100\,\mathrm{J/K}$ and temperatures from $300$ to $600\,\mathrm{K}$, the result is $\Delta S=100\ln 2\,\mathrm{J/K}\simeq69.3\,\mathrm{J/K}$. Reversing the states makes the ratio $\dfrac12$ and decreases the entropy by the same amount.

In reversible melting at the equilibrium temperature $T_{\mathrm{fus}}$, the temperature is constant and the heat absorbed is $m\ell_f$. Thus $\Delta S=\dfrac{m\ell_f}{T_{\mathrm{fus}}}$. At the same temperature and for the same mass, freezing gives the opposite change.

For an ideal gas with amount $n$ and constant molar heat capacity $C_V$, a reversible path with two stages can be used. The first stage changes the temperature at fixed volume and contributes $nC_V\ln\dfrac{T_f}{T_i}$. The second stage changes the volume at constant temperature $T_f$. Along this stage $\delta Q_{\mathrm{rev}}=p\,\mathrm{d}V$ and $p=\dfrac{nRT_f}{V}$, so the contribution is $nR\ln\dfrac{V_f}{V_i}$. The sum is
$$
\Delta S=nC_V\ln\frac{T_f}{T_i}+nR\ln\frac{V_f}{V_i}.
$$
:::

:::esempio{titolo="Free expansion and a reversible path"}
One mole of ideal gas expands into a vacuum in an insulated container. The gas exchanges no heat and does no work on the surroundings, so $\Delta U=0$. The internal energy of an ideal gas depends only on temperature, and $T_f=T_i$. If the volume doubles, the formula for the change between the two states gives
$$
\Delta S=R\ln2\simeq5.76\,\mathrm{J/K}.
$$
The actual heat transfer is zero while the entropy increases. The heat in the definition of $\Delta S$ is the heat exchanged along the hypothetical reversible isotherm between the same states.
:::

## Total entropy and spontaneous processes

:::teorema{#entropia-totale titolo="Entropy balance for an isolated whole"}
For an isolated whole that includes the system and all surroundings interacting with it, the second law takes the form
$$
\Delta S_{\mathrm{tot}}=\Delta S_{\mathrm{sist}}+\Delta S_{\mathrm{amb}}\geq0.
$$
A reversible process gives equality, and an irreversible process gives a positive change. The entropy of one part can decrease if the sum of the changes satisfies the balance.
:::

:::esempio{titolo="Transfer between two isolated reservoirs"}
Two reservoirs at $600$ and $300\,\mathrm{K}$ exchange $600\,\mathrm{J}$. To evaluate transfer from the hot reservoir to the cold one, assign a negative sign to the heat exchanged by the former and a positive sign to the heat exchanged by the latter. Since the temperatures remain constant,
$$
\begin{aligned}
\Delta S_h &= -\frac{600}{600}\,\mathrm{J/K}=-1\,\mathrm{J/K},\\[6pt]
\Delta S_c &= \frac{600}{300}\,\mathrm{J/K}=2\,\mathrm{J/K},\\[6pt]
\Delta S_{\mathrm{tot}} &= 1\,\mathrm{J/K}.
\end{aligned}
$$
The cold reservoir receives the same energy as the hot one loses. Its entropy increase has a greater magnitude because the temperature in the denominator is lower. Reversing the flow would give $\Delta S_{\mathrm{tot}}=-1\,\mathrm{J/K}$, which is incompatible with direct transfer in isolation.
:::

:::osservazione
In an engine cycle the working fluid returns to its initial state, so its entropy change is zero. For the actual engine that delivers $400\,\mathrm{J}$, with $Q_h=1000\,\mathrm{J}$ at $600\,\mathrm{K}$ and $Q_c=600\,\mathrm{J}$ at $300\,\mathrm{K}$, the entropy increase of the reservoirs is
$$
\Delta S_{\mathrm{tot}}=\left(-\frac{1000}{600}+\frac{600}{300}\right)\,\mathrm{J/K}
=\frac13\,\mathrm{J/K}.
$$
The balance shows that the cycle is irreversible. The same calculation for the reversible engine, which rejects $500\,\mathrm{J}$ to the cold reservoir, gives zero.
:::

## Microscopic interpretation

:::osservazione{#interpretazione titolo="Macrostates and microstates"}
A **macrostate** describes the system with bulk quantities such as pressure, volume, and temperature. A **microstate** specifies a microscopic configuration compatible with the macrostate. If the compatible microstates are equally probable, Boltzmann's formula is $S=k_B\ln\Omega$, where $\Omega$ is their number and $k_B$ is the Boltzmann constant.

For an ideal gas occupying twice the volume at the same temperature, the volume available to the position of each particle doubles. For $N$ particles, the number of position configurations increases by a factor of $2^N$. The statistical change is then $k_B\ln(2^N)=Nk_B\ln2=nR\ln2$, which agrees with the reversible-path calculation.

After the expansion, the probability of finding every particle in the original half is $2^{-N}$ in the independent-particle model. For a macroscopic sample this value is negligible. The calculation quantifies why the spontaneous expansion can be observed, while a spontaneous return to the original configuration is extremely unlikely.
:::
