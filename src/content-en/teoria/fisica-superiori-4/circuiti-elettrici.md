---
titolo: Electric circuits and Kirchhoff's laws
sommario: How to read a circuit diagram, set up currents and voltages, and identify what changes when an RC circuit is switched.
---

## Nodes, branches, and ideal components

:::definizione{#nodi-rami titolo="Reading a circuit diagram"}
A **node** is the set of points joined by ideal wires with no components in between. Since the voltage drop across an ideal wire is zero, all points in the node have the same potential. A **branch** connects two nodes and can contain several components. A **loop** is a closed path along the branches.

To identify two resistors in parallel, follow the wires from both ends. If each terminal of the first resistor shares a node with the corresponding terminal of the second, the two resistors have the same potential difference across them. To identify series resistors, examine the connection between them. If only those two resistors meet at that point, all the current leaving the first enters the second.
:::

:::osservazione
An ideal source maintains a potential difference $\mathcal E$ across its terminals, called its **electromotive force**. It is measured in volts and represents the energy supplied per unit charge. The longer plate of the battery symbol marks its positive terminal. When the battery alone powers a resistive circuit, conventional current flows from its positive terminal to its negative terminal through the external circuit.

For a branch where the direction is uncertain, choose a reference arrow before writing the equations. A value such as $I=-0.40\,\mathrm A$ represents a current of magnitude $0.40\,\mathrm A$ flowing opposite to that arrow.
:::

## Resistors in series

::::teorema{#serie titolo="The current is common and the voltages add"}
Resistors in series carry the same current because no current leaves the intermediate connections through other branches. The **equivalent resistance** is the resistance of a single resistor that would draw the same current as the series combination at the same voltage.
$$
R_{\mathrm{eq}}=R_1+R_2+\cdots.
$$

:::dimostrazione
For two resistors, the voltage across the series combination is the sum of the two drops. Since the current is common, Ohm's law gives
$$
\begin{aligned}
\Delta V &= \Delta V_1+\Delta V_2 \\[6pt]
&= IR_1+IR_2 \\[6pt]
&= I(R_1+R_2).
\end{aligned}
$$
For a single resistor, the same relation is $\Delta V=IR_{\mathrm{eq}}$. The coefficient of $I$ is therefore $R_1+R_2$.
:::
::::

:::esempio{titolo="Voltage drops across a series combination"}
In the diagram, the battery maintains $12\,\mathrm V$ across the series combination. Since $R_{\mathrm{eq}}=4\,\Omega+8\,\Omega=12\,\Omega$, both resistors carry
$$
I=\frac{12\,\mathrm V}{12\,\Omega}=1\,\mathrm A.
$$
The drop across the first resistor is $1\,\mathrm A\cdot4\,\Omega=4\,\mathrm V$. Across the second it is $1\,\mathrm A\cdot8\,\Omega=8\,\mathrm V$. Starting from the negative terminal at $0\,\mathrm V$, the potential rises to $12\,\mathrm V$ across the battery, falls to $8\,\mathrm V$ between the resistors, and returns to $0\,\mathrm V$.

::schema{riferimento=0 linee="0,1.48 0,3 1.4,3;2.8,3 4.2,3;5.6,3 7,3 7,0 0,0 0,1.16;-0.44,1.48 0.44,1.48;-0.27,1.16 0.27,1.16;1.4,2.72 2.8,2.72 2.8,3.28 1.4,3.28 1.4,2.72;4.2,2.72 5.6,2.72 5.6,3.28 4.2,3.28 4.2,2.72" frecce="0.8,3.85,2.2,3.85,I" etichette="0.9,1.32,12 V;2.1,2.25,4 Ω;4.9,2.25,8 Ω" titolo="In the loop the current passes through both resistors"}
:::

:::teorema{#partitore titolo="Voltage divider"}
Two series resistors connected across a voltage $\Delta V_{\mathrm{tot}}$ carry $I=\dfrac{\Delta V_{\mathrm{tot}}}{R_1+R_2}$. Substituting into $\Delta V_1=IR_1$ gives
$$
\Delta V_1=\Delta V_{\mathrm{tot}}\frac{R_1}{R_1+R_2}.
$$
The fraction of the voltage across $R_1$ equals its fraction of the total resistance. For $R_1=2\,\mathrm{k\Omega}$, $R_2=3\,\mathrm{k\Omega}$, and $\Delta V_{\mathrm{tot}}=10\,\mathrm V$, the result is $\Delta V_1=10\,\mathrm V\cdot\dfrac{2}{5}=4\,\mathrm V$.
:::

:::attenzione
A load connected across $R_1$ changes the divider. If the load is also $2\,\mathrm{k\Omega}$, the parallel combination has resistance $1\,\mathrm{k\Omega}$. Its voltage drops to $10\,\mathrm V\cdot\dfrac{1}{1+3}=2.5\,\mathrm V$. The voltage across the load is therefore found using the equivalent resistance of the parallel combination.
:::

## Resistors in parallel

::::teorema{#parallelo titolo="The voltage is common and the currents add"}
Every branch of a parallel combination starts at the same node and ends at the same node. Since each node has a single potential, the resistors have the same voltage $\Delta V$ across them. At the node where the current splits, the total current is the sum of the branch currents.
$$
\frac{1}{R_{\mathrm{eq}}}=\frac{1}{R_1}+\frac{1}{R_2}+\cdots.
$$

:::dimostrazione
For two branches, Ohm's law gives
$$
I_{\mathrm{tot}}=\frac{\Delta V}{R_1}+\frac{\Delta V}{R_2}
=\Delta V\left(\frac{1}{R_1}+\frac{1}{R_2}\right).
$$
The single equivalent resistor carries the same current for a given $\Delta V$. The coefficient of $\Delta V$ is therefore $\dfrac{1}{R_{\mathrm{eq}}}$. For two resistors, this can also be written as $R_{\mathrm{eq}}=\dfrac{R_1R_2}{R_1+R_2}$.
:::
::::

:::esempio{titolo="How the current divides"}
In the parallel combination of $R_1=6\,\Omega$ and $R_2=3\,\Omega$, the battery maintains $V_A-V_B=12\,\mathrm V$ across both branches. The $6\,\Omega$ branch carries $2\,\mathrm A$, so the branch with half the resistance carries twice the current, $4\,\mathrm A$. The battery supplies $6\,\mathrm A$ in total, which gives $R_{\mathrm{eq}}=\dfrac{12\,\mathrm V}{6\,\mathrm A}=2\,\Omega$.

::schema{riferimento=0 linee="0,1.48 0,3 6,3 6,2.12;6,0.88 6,0 0,0 0,1.16;3,3 3,2.12;3,0.88 3,0;-0.44,1.48 0.44,1.48;-0.27,1.16 0.27,1.16;2.73,0.88 3.27,0.88 3.27,2.12 2.73,2.12 2.73,0.88;5.73,0.88 6.27,0.88 6.27,2.12 5.73,2.12 5.73,0.88" punti="3,3,A,pieno;3,0,B,pieno" frecce="3.92,2.16,3.92,0.83,I_1;6.95,2.16,6.95,0.83,I_2" etichette="0.9,1.32,12 V;2.13,1.51,6 Ω;5.06,1.51,3 Ω" titolo="Both resistors connect to the same nodes A and B"}
:::

:::osservazione
The equivalent resistance of a parallel combination of positive resistances is smaller than the smallest branch resistance. Adding a branch increases the total current at a fixed voltage. In a series-parallel circuit, the equivalent resistance gives the supply current. The original diagram then gives the branch currents. For example, if the $2\,\Omega$ parallel combination is in series with a $4\,\Omega$ resistor across $18\,\mathrm V$, the series current is $3\,\mathrm A$. The voltage across the parallel combination is $3\,\mathrm A\cdot2\,\Omega=6\,\mathrm V$, so the $6\,\Omega$ and $3\,\Omega$ branches carry $1\,\mathrm A$ and $2\,\mathrm A$, respectively.
:::

## Kirchhoff's laws

:::teorema{#kirchhoff titolo="Conservation of charge and energy"}
**Kirchhoff's current law** expresses conservation of charge. At a node in the circuit model, where charge does not accumulate, the sum of the currents entering equals the sum of the currents leaving. If $2\,\mathrm A$ and $3\,\mathrm A$ enter and one branch carries $1\,\mathrm A$ out, the other branch carries $2\,\mathrm A+3\,\mathrm A-1\,\mathrm A=4\,\mathrm A$ out.

**Kirchhoff's voltage law** states that the algebraic sum of the potential changes around a closed path is zero for a lumped circuit that links no changing magnetic flux. When crossing a resistor in the reference direction of $I$, write $-RI$. In the opposite direction, write $+RI$. Crossing an ideal source from its negative terminal to its positive terminal contributes $+\mathcal E$. The reverse traversal contributes $-\mathcal E$.
:::

:::esempio{titolo="Two opposing sources"}
Take the traversal from the negative to the positive terminal of the $4\,\mathrm V$ source as positive. For opposing sources of $4\,\mathrm V$ and $12\,\mathrm V$ with a total resistance of $4\,\Omega$, the loop equation is
$$
4\,\mathrm V-12\,\mathrm V-(4\,\Omega)I=0
\quad\Longrightarrow\quad
I=-2\,\mathrm A.
$$
The sign shows that the current flows in the direction driven by the $12\,\mathrm V$ source. Following the actual current around the loop, the larger source supplies $12\,\mathrm J$ per coulomb. The smaller source absorbs $4\,\mathrm J$, and the resistance dissipates the remaining $8\,\mathrm J$.
:::

:::esempio{titolo="Three branches with two sources"}
Three branches connect nodes $A$ and $B$. The first contains an ideal $12\,\mathrm V$ battery in series with $R_1=6\,\Omega$. The second contains a $6\,\mathrm V$ battery with $R_2=3\,\Omega$. The third contains only $R_3=6\,\Omega$. Both batteries have their positive terminals on the $A$ side.

Let $V$ be the difference $V_A-V_B$ and take all the reference currents from $A$ to $B$. Applying Ohm's law to each branch gives
$$
\begin{aligned}
I_1 &= \frac{V-12\,\mathrm V}{6\,\Omega}, \qquad
I_2 = \frac{V-6\,\mathrm V}{3\,\Omega},\\[6pt]
I_3 &= \frac{V}{6\,\Omega}.
\end{aligned}
$$
Because all the arrows point away from $A$, the equation is $I_1+I_2+I_3=0$. Multiplying by $6\,\Omega$ gives $4V-24\,\mathrm V=0$, so $V=6\,\mathrm V$. The first branch carries $1\,\mathrm A$ from $B$ to $A$. The second has $I_2=0$ because $V$ equals the voltage of its battery. The third carries $1\,\mathrm A$ from $A$ to $B$.

::schema{riferimento=0 linee="0,2.63 0,3.1;0,4.15 0,4.7 7,4.7 7,2.9;7,1.8 7,0 0,0 0,2.34;-0.4,2.63 0.4,2.63;-0.24,2.34 0.24,2.34;-0.26,3.1 0.26,3.1 0.26,4.15 -0.26,4.15 -0.26,3.1;3.5,4.7 3.5,4.15;3.5,3.1 3.5,2.63;3.5,2.34 3.5,0;3.1,2.63 3.9,2.63;3.26,2.34 3.74,2.34;3.24,3.1 3.76,3.1 3.76,4.15 3.24,4.15 3.24,3.1;6.74,1.8 7.26,1.8 7.26,2.9 6.74,2.9 6.74,1.8" punti="3.5,4.7,A,pieno;3.5,0,B,pieno" frecce="0.95,1.73,0.95,0.53,I_1;4.45,1.73,4.45,0.53,I_2;7.95,1.73,7.95,0.53,I_3" etichette="0.89,2.47,12 V;0.9,3.63,6 Ω;4.35,2.47,6 V;4.39,3.63,3 Ω;7.88,2.43,6 Ω" titolo="All reference arrows point from node A to node B"}
:::

## A source with internal resistance

:::teorema{#generatore-reale titolo="Internal resistance and terminal voltage"}
A real source can be modeled as an ideal electromotive force $\mathcal E$ in series with an internal resistance $r$. When it powers an external resistor $R$, the same current flows through $R$ and $r$. It follows that
$$
I=\frac{\mathcal E}{R+r},
\qquad V_{\mathrm{morsetti}}=\mathcal E-rI=IR.
$$
With the circuit open, an ideal voltmeter reads $\mathcal E$ because the current is zero. When a load closes the circuit, the internal drop $rI$ reduces the voltage available at the terminals. In this model, an external short circuit would have $R=0$ and current $\dfrac{\mathcal E}{r}$, so all the power would be dissipated in the internal resistance.
:::

:::esempio{titolo="Finding the parameters from two measurements"}
The terminal voltage is $11\,\mathrm V$ when the source supplies $1\,\mathrm A$ and $9\,\mathrm V$ when it supplies $3\,\mathrm A$. The voltage falls by $2\,\mathrm V$ for an increase of $2\,\mathrm A$, so
$$
r=\frac{11\,\mathrm V-9\,\mathrm V}{3\,\mathrm A-1\,\mathrm A}=1\,\Omega.
$$
At $1\,\mathrm A$ the internal drop is $1\,\mathrm V$, so the electromotive force is $11\,\mathrm V+1\,\mathrm V=12\,\mathrm V$. On the graph it is the voltage-axis intercept.

::grafico{f="12-x" xmin=0 xmax=5 ymin=0 ymax=14 nomi="I,V" punti="0,12,pieno;1,11,pieno;3,9,pieno" titolo="Terminal voltage in volts and current in amperes. The measurements determine the open-circuit voltage and internal resistance."}
:::

## Power balance

:::teorema{#potenze titolo="Supplied and dissipated power"}
For a real source powering a resistive load, the loop equation is $\mathcal E=I(R+r)$. Multiplying by $I$ turns a balance of energies per unit charge into a balance of energies per unit time.
$$
\mathcal E I=I^2R+I^2r.
$$
If a $12\,\mathrm V$ battery with $r=1\,\Omega$ powers a load $R=5\,\Omega$, the current is $2\,\mathrm A$. The battery supplies $24\,\mathrm W$. Of this, $20\,\mathrm W$ is delivered to the load and $4\,\mathrm W$ is dissipated internally. The useful fraction is $\dfrac{20}{24}\simeq83.3\%$.
:::

:::osservazione
When a battery is being charged, the current enters its positive terminal. Taking $I$ as the magnitude of that current, the terminal voltage is $\mathcal E+rI$. In the power balance, the ideal part of the battery absorbs $\mathcal E I$. The internal resistance still dissipates $I^2r$, which is positive in either direction.
:::

## Charging a capacitor through a resistor

:::teorema{#carica-rc titolo="RC charging transient"}
An initially uncharged capacitor of capacitance $C$ is connected in series with a resistance $R$ and an ideal source $\mathcal E$. The voltage $V_C$ across its plates equals $\dfrac{q}{C}$, where $q$ is the charge on the plate connected to the positive side of the circuit. The loop equation is $\mathcal E=RI+V_C$. Just after the circuit closes, $V_C=0$ and the full source voltage is across the resistor. As $q$ increases, $V_C$ rises and the voltage across the resistor falls.

In the ideal model, with $t$ measured from the instant the circuit closes,
$$
\begin{aligned}
\tau &= RC,\\[6pt]
V_C(t) &= \mathcal E(1-e^{-\frac{t}{\tau}}),\\[6pt]
q(t) &= CV_C(t),\\[6pt]
I(t) &= \frac{\mathcal E}{R}e^{-\frac{t}{\tau}}.
\end{aligned}
$$
The **time constant** $\tau$ is measured in seconds because $\Omega\cdot\mathrm F=\mathrm s$. The ratio $\dfrac{t}{\tau}$ is dimensionless.
:::

:::esempio{titolo="Charging voltage and current after one time constant"}
With $R=10\,\mathrm{k\Omega}$, $C=100\,\mathrm{\mu F}$, and $\mathcal E=12\,\mathrm V$, the product in SI units gives $\tau=(10^4\,\Omega)(10^{-4}\,\mathrm F)=1\,\mathrm s$. At $t=\tau$ the capacitor voltage is $12\,\mathrm V(1-e^{-1})\simeq7.59\,\mathrm V$. This leaves $12\,\mathrm V-7.59\,\mathrm V=4.41\,\mathrm V$ across the resistor, so $I\simeq0.441\,\mathrm{mA}$. The capacitor has reached about $63.2\%$ of its final voltage, and the current has fallen to $36.8\%$ of its initial value.

::grafico{f="1-exp(-x);exp(-x)" xmin=0 xmax=5 ymin=0 ymax=1.2 nomi="t/τ," legenda="\dfrac{V_C}{\mathcal E};\dfrac{I}{I_0}" punti="1,0.63212,pieno;1,0.36788,pieno" titolo="The normalized capacitor voltage rises while the normalized current falls"}
:::

## Discharging and the continuity of voltage

:::teorema{#scarica-rc titolo="RC discharging transient"}
A capacitor at an initial voltage $V_0>0$ is disconnected from its battery and connected across a resistor $R$. The current through the resistor flows from the initially positive plate to the negative plate. Since the source has been removed, the voltage across the resistor has magnitude $V_C$.
$$
V_C(t)=V_0e^{-\frac{t}{\tau}},
\qquad q(t)=CV_C(t),
\qquad I_{\mathrm{mod}}(t)=\frac{V_C(t)}{R}.
$$
After $\tau$, $36.8\%$ of the initial voltage remains. To find the half-life, set $e^{-\frac{t}{\tau}}=\dfrac{1}{2}$. Taking the logarithm gives $t=\tau\ln 2$.
:::

:::esempio{titolo="Voltage and remaining energy"}
The stored energy is $U(t)=\dfrac{1}{2}CV_C(t)^2$. Substituting the discharge law gives
$$
\frac{U(t)}{U(0)}=e^{-\frac{2t}{\tau}}.
$$
At the instant when the voltage has halved, one-fourth of the energy remains. The other three-fourths have been dissipated by the resistor in the ideal model.

::grafico{f="exp(-x);exp(-2*x)" xmin=0 xmax=3 ymin=0 ymax=1.2 nomi="t/τ," legenda="\dfrac{V_C}{V_0};\dfrac{U}{U_0}" punti="0.693147,0.5,pieno;0.693147,0.25,pieno" titolo="During discharge, the remaining energy falls faster than the voltage"}
:::

:::osservazione
When a switch changes position, the starting point is the capacitor voltage just before switching. An instantaneous change in $V_C$ would require an instantaneous change in charge $q=CV_C$, which is impossible with a finite current. The current can change immediately because it is determined by the resistor connection after switching.
:::
